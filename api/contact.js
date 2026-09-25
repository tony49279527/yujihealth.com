const DEFAULT_PUBLIC_EMAIL = "info@yujihealth.com";
const DEFAULT_INQUIRY_TO = DEFAULT_PUBLIC_EMAIL;
const PROVIDER_TIMEOUT_MS = 12000;
const ATTACHMENT_EXTENSIONS = new Set(["pdf", "xls", "xlsx", "doc", "docx", "png", "jpg", "jpeg"]);
const ATTACHMENT_MAX_BYTES = 3 * 1024 * 1024;

const json = (response, statusCode, body) => {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
};

const normalizeBody = (body) => {
  if (!body) return {};
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body;
};

const clean = (value, maxLength = 1200) => String(value || "").trim().slice(0, maxLength);

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isValidBriefLink = (value) => {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const sanitizeAttachment = (attachment) => {
  if (!attachment || typeof attachment !== "object") return null;
  const filename = String(attachment.filename || "").replace(/[\\/:*?"<>|]/g, "").slice(0, 120);
  const content = String(attachment.content || "");
  if (!filename || !content) return null;
  const extension = filename.split(".").pop().toLowerCase();
  if (!ATTACHMENT_EXTENSIONS.has(extension)) return { error: `Unsupported file type: ${extension}.` };
  let byteLength = 0;
  try {
    byteLength = Buffer.from(content, "base64").length;
  } catch {
    return { error: "Attachment could not be decoded." };
  }
  if (byteLength === 0 || byteLength > ATTACHMENT_MAX_BYTES) {
    return { error: "Attachment must be 3 MB or smaller." };
  }
  return { filename, content };
};

const buildInquiryText = (payload, publicEmail) => [
  "New YUJI website RFQ",
  "",
  `Name: ${payload.name}`,
  `Email: ${payload.email}`,
  `Company: ${payload.company || "Not provided"}`,
  `Country / market: ${payload.country || "Not provided"}`,
  `Sales channel: ${payload.sales_channel || "Not provided"}`,
  `Product interest: ${payload.product || "OEM/ODM program"}`,
  `Estimated volume: ${payload.volume || "Not provided"}`,
  `Color / size / material direction: ${payload.spec_direction || "Not provided"}`,
  `Packaging needs: ${payload.packaging || "Not provided"}`,
  `Sample needs: ${payload.sample_needs || "Not provided"}`,
  `Carton and shipping: ${payload.shipping || "Not provided"}`,
  `Timeline: ${payload.timeline || "Not provided"}`,
  `Document needs: ${payload.documents || "Not provided"}`,
  `Brief link: ${payload.brief_link || "Not provided"}`,
  `Attachment: ${payload.attachment ? payload.attachment.filename : "None"}`,
  `Source page: ${payload.sourcePage || "Direct or unavailable"}`,
  `Landing page: ${payload.landingPage || "Direct or unavailable"}`,
  `Campaign: ${payload.campaign || "Not provided"}`,
  "",
  "Project message:",
  payload.message,
  "",
  `Public contact email shown on website: ${publicEmail}`,
].join("\n");

export default async function handler(request, response) {
  const inquiryId = globalThis.crypto?.randomUUID?.() || `rfq-${Date.now().toString(36)}`;
  response.setHeader("X-RFQ-ID", inquiryId);

  if (request.method === "OPTIONS") {
    response.setHeader("Allow", "POST, OPTIONS");
    return json(response, 204, {});
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST, OPTIONS");
    return json(response, 405, { error: "Method not allowed" });
  }

  const body = normalizeBody(request.body);
  const payload = {
    name: clean(body.name, 120),
    email: clean(body.email, 180),
    company: clean(body.company, 160),
    country: clean(body.country, 160),
    sales_channel: clean(body.sales_channel, 80),
    product: clean(body.product, 160),
    volume: clean(body.volume, 160),
    spec_direction: clean(body.spec_direction, 300),
    packaging: clean(body.packaging, 300),
    sample_needs: clean(body.sample_needs, 200),
    shipping: clean(body.shipping, 300),
    timeline: clean(body.timeline, 200),
    documents: clean(body.documents, 400),
    brief_link: clean(body.brief_link, 500),
    message: clean(body.message, 3000),
    website: clean(body.website, 160),
    sourcePage: clean(body.sourcePage, 240),
    landingPage: clean(body.landingPage, 240),
    campaign: clean(body.campaign, 800),
  };

  if (payload.website) {
    return json(response, 200, { ok: true });
  }

  if (!payload.name || !payload.email || !payload.message || !payload.country || !payload.product) {
    return json(response, 400, { error: "Name, email, country, product, and message are required." });
  }

  if (!isValidEmail(payload.email)) {
    return json(response, 400, { error: "Enter a valid email address." });
  }

  if (!isValidBriefLink(payload.brief_link)) {
    return json(response, 400, { error: "Brief link must be a valid URL." });
  }

  const attachment = sanitizeAttachment(body.attachment);
  if (attachment && attachment.error) {
    return json(response, 400, { error: attachment.error });
  }
  payload.attachment = attachment;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json(response, 503, { error: "Email delivery is not configured." });
  }

  const to = process.env.INQUIRY_TO || DEFAULT_INQUIRY_TO;
  const publicEmail = process.env.PUBLIC_CONTACT_EMAIL || DEFAULT_PUBLIC_EMAIL;
  const from = process.env.RESEND_FROM || `YUJI Website <${publicEmail}>`;
  const subjectParts = [payload.product || "OEM/ODM", payload.company || payload.country || payload.name].filter(Boolean);

  const emailPayload = {
    from,
    to: [to],
    reply_to: payload.email,
    subject: `YUJI RFQ: ${subjectParts.join(" - ")}`,
    text: buildInquiryText(payload, publicEmail),
  };
  if (payload.attachment) {
    emailPayload.attachments = [{ filename: payload.attachment.filename, content: payload.attachment.content }];
  }

  const controller = new AbortController();
  const providerTimeout = setTimeout(() => controller.abort(), PROVIDER_TIMEOUT_MS);
  let resendResponse;

  try {
    resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
      signal: controller.signal,
    });
  } catch (error) {
    console.error(JSON.stringify({
      event: "rfq_provider_unavailable",
      inquiryId,
      provider: "resend",
      reason: error?.name === "AbortError" ? "timeout" : "network_error",
      recordedAt: new Date().toISOString(),
    }));
    return json(response, 502, { error: "Email delivery is temporarily unavailable.", inquiryId });
  } finally {
    clearTimeout(providerTimeout);
  }

  const resendResult = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    console.error(JSON.stringify({
      event: "rfq_provider_rejected",
      inquiryId,
      provider: "resend",
      status: resendResponse.status,
      recordedAt: new Date().toISOString(),
    }));
    return json(response, 502, { error: "Email delivery failed." });
  }

  console.info(JSON.stringify({
    event: "rfq_provider_accepted",
    inquiryId,
    provider: "resend",
    providerMessageId: clean(resendResult.id, 200) || "not-returned",
    hasAttachment: Boolean(payload.attachment),
    recordedAt: new Date().toISOString(),
  }));

  response.setHeader("X-RFQ-Status", "accepted");
  return json(response, 202, { ok: true, status: "accepted", inquiryId });
}
