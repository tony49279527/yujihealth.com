const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const inquiryForms = document.querySelectorAll("[data-inquiry-form]");
const attributionKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const attributionPrefix = "yuji:attribution:";
const currentUrl = new URL(window.location.href);
const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
const isZh = (document.documentElement.lang || "en").toLowerCase().startsWith("zh");
const analyticsProducts = new Set([
  "Menstrual cup OEM",
  "Menstrual cups",
  "Menstrual discs",
  "Sanitary pads and liners",
  "Accessories and starter kits",
  "OEM/ODM mixed program",
  "Quality documents",
]);
const productAliases = {
  "Menstrual cup OEM": "Menstrual cups",
};
const normalizeProduct = (value) => productAliases[value] || value;
const analyticsProduct = (value) => {
  const normalizedProduct = normalizeProduct(value);
  return analyticsProducts.has(normalizedProduct) ? normalizedProduct : "unspecified";
};

const trackEvent = (name, props = {}) => {
  if (typeof window.plausible !== "function") return;
  window.plausible(name, { props });
};

try {
  if (!window.sessionStorage.getItem(`${attributionPrefix}landing_page`)) {
    window.sessionStorage.setItem(`${attributionPrefix}landing_page`, currentUrl.pathname);
  }

  attributionKeys.forEach((key) => {
    const value = currentUrl.searchParams.get(key);
    if (value && !window.sessionStorage.getItem(`${attributionPrefix}${key}`)) {
      window.sessionStorage.setItem(`${attributionPrefix}${key}`, value.slice(0, 160));
    }
  });
} catch {
  // Attribution is optional when browser storage is unavailable.
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }
  });
}

document.querySelectorAll("[data-site-nav] a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  const linkPath = new URL(href, window.location.origin).pathname.replace(/\/$/, "") || "/";
  if (linkPath === currentPath || (linkPath !== "/" && currentPath.startsWith(linkPath))) {
    link.classList.add("is-active");
  }
});

async function initAnalytics() {
  try {
    const response = await fetch("/config/analytics.json", { credentials: "same-origin" });
    if (!response.ok) return;
    const config = await response.json();
    if (!config || config.enabled !== true) return;

    if (config.provider === "plausible" && config.plausibleDomain && config.plausibleScriptSrc) {
      window.plausible = window.plausible || function plausible() {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
      const script = document.createElement("script");
      script.defer = true;
      script.setAttribute("data-domain", config.plausibleDomain);
      script.src = config.plausibleScriptSrc;
      document.head.appendChild(script);

      if (currentPath === "/contact" || currentPath === "/zh/contact") {
        trackEvent("contact_arrival", { page: currentPath });
      }
    }
  } catch {
    // Analytics is optional and must fail silently.
  }
}

initAnalytics();

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest('a[href^="/contact/"]');
  if (!link) return;
  const destination = new URL(link.href, window.location.origin);
  trackEvent("product_cta", {
    sourcePage: currentPath,
    product: analyticsProduct(destination.searchParams.get("product")),
  });
});

inquiryForms.forEach((inquiryForm) => {
  const formNote = inquiryForm.querySelector("[data-form-note]");
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  const defaultSubmitLabel = submitButton ? submitButton.textContent : "";
  const productSelect = inquiryForm.querySelector('select[name="product"]');
  const sourcePageInput = inquiryForm.querySelector('input[name="sourcePage"]');
  const landingPageInput = inquiryForm.querySelector('input[name="landingPage"]');
  const campaignInput = inquiryForm.querySelector('input[name="campaign"]');
  const requestedProduct = normalizeProduct(new URL(window.location.href).searchParams.get("product"));
  let rfqStarted = false;

  if (productSelect && requestedProduct) {
    const hasMatchingOption = Array.from(productSelect.options).some((option) => option.value === requestedProduct);
    if (hasMatchingOption) productSelect.value = requestedProduct;
  }

  if (sourcePageInput && document.referrer) {
    try {
      const referrerUrl = new URL(document.referrer);
      if (referrerUrl.origin === window.location.origin) sourcePageInput.value = referrerUrl.pathname;
    } catch {
      sourcePageInput.value = "";
    }
  }

  try {
    if (landingPageInput) {
      landingPageInput.value = window.sessionStorage.getItem(`${attributionPrefix}landing_page`) || currentUrl.pathname;
    }
    if (campaignInput) {
      campaignInput.value = attributionKeys
        .map((key) => {
          const value = window.sessionStorage.getItem(`${attributionPrefix}${key}`);
          return value ? `${key}=${value}` : "";
        })
        .filter(Boolean)
        .join(" | ");
    }
  } catch {
    if (landingPageInput) landingPageInput.value = currentUrl.pathname;
  }

  const setFormNote = (message, state = "neutral") => {
    if (!formNote) return;
    formNote.textContent = message;
    formNote.classList.toggle("is-success", state === "success");
    formNote.classList.toggle("is-error", state === "error");
  };

  inquiryForm.addEventListener("input", (event) => {
    if (rfqStarted || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement)) return;
    if (event.target.name === "website" || !String(event.target.value || "").trim()) return;
    rfqStarted = true;
    trackEvent("rfq_start", {
      product: analyticsProduct(productSelect?.value || requestedProduct),
      landingPage: landingPageInput?.value || currentPath,
      sourcePage: sourcePageInput?.value || "direct",
    });
  });

  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      country: String(data.get("country") || "").trim(),
      product: String(data.get("product") || "").trim(),
      volume: String(data.get("volume") || "").trim(),
      packaging: String(data.get("packaging") || "").trim(),
      timeline: String(data.get("timeline") || "").trim(),
      documents: String(data.get("documents") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || "").trim(),
      sourcePage: String(data.get("sourcePage") || "").trim(),
      landingPage: String(data.get("landingPage") || "").trim(),
      campaign: String(data.get("campaign") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFormNote(isZh ? "请填写姓名、邮箱和项目说明后再发送。" : "Please add your name, email, and project message before sending.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = isZh ? "正在发送询价..." : "Sending RFQ...";
    }

    try {
      trackEvent("rfq_submit_client", {
        product: analyticsProduct(payload.product),
        landingPage: payload.landingPage || currentPath,
        sourcePage: payload.sourcePage || "direct",
      });

      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact endpoint unavailable");
      }

      const result = await response.json().catch(() => ({}));
      trackEvent("rfq_provider_accepted", {
        product: analyticsProduct(payload.product),
        landingPage: payload.landingPage || currentPath,
        sourcePage: payload.sourcePage || "direct",
        status: result.status || "accepted",
      });

      inquiryForm.reset();
      rfqStarted = false;
      const inquiryReference = result.inquiryId ? ` ${isZh ? "参考号" : "Reference"}: ${result.inquiryId}.` : "";
      setFormNote(
        (isZh
          ? "询价已由邮件服务接受投递。裕吉生物会审阅信息，并从业务邮箱回复。"
          : "Inquiry accepted for email delivery. YUJI will review the details and reply from its business inbox.") + inquiryReference,
        "success",
      );
    } catch (error) {
      setFormNote(isZh ? "在线提交暂时不可用。请将市场、数量、包装和文件需求发送至 info@yujihealth.com。" : "Online submission is temporarily unavailable. Email info@yujihealth.com with your market, volume, packaging, and document needs.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultSubmitLabel;
      }
    }
  });
});
