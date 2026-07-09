const DEFAULT_PUBLIC_EMAIL = "info@yujihealth.com";
const DEFAULT_INQUIRY_TO = DEFAULT_PUBLIC_EMAIL;

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

const buildInquiryText = (payload, publicEmail) => [
  "New YUJI website RFQ",
  "",
  `Name: ${payload.name}`,
  `Email: ${payload.email}`,
  `Company: ${payload.company || "Not provided"}`,
  `Country / market: ${payload.country || "Not provided"}`,
  `Product interest: ${payload.product || "OEM/ODM program"}`,
  `Estimated volume: ${payload.volume || "Not provided"}`,
  "",
  "Project message:",
  payload.message,
  "",
  `Public contact email shown on website: ${publicEmail}`,
].join("\n");

export default async function handler(request, response) {
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
    product: clean(body.product, 160),
    volume: clean(body.volume, 160),
    message: clean(body.message, 3000),
    website: clean(body.website, 160),
  };

  if (payload.website) {
    return json(response, 200, { ok: true });
  }

  if (!payload.name || !payload.email || !payload.message) {
    return json(response, 400, { error: "Name, email, and message are required." });
  }

  if (!isValidEmail(payload.email)) {
    return json(response, 400, { error: "Enter a valid email address." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json(response, 503, { error: "Email delivery is not configured." });
  }

  const to = process.env.INQUIRY_TO || DEFAULT_INQUIRY_TO;
  const publicEmail = process.env.PUBLIC_CONTACT_EMAIL || DEFAULT_PUBLIC_EMAIL;
  const from = process.env.RESEND_FROM || "YUJI Website <onboarding@resend.dev>";
  const subjectParts = [payload.product || "OEM/ODM", payload.company || payload.country || payload.name].filter(Boolean);

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `YUJI RFQ: ${subjectParts.join(" - ")}`,
      text: buildInquiryText(payload, publicEmail),
    }),
  });

  if (!resendResponse.ok) {
    return json(response, 502, { error: "Email delivery failed." });
  }

  return json(response, 200, { ok: true });
}
