const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const inquiryForms = document.querySelectorAll("[data-inquiry-form]");

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

const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
document.querySelectorAll("[data-site-nav] a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  const linkPath = new URL(href, window.location.origin).pathname.replace(/\/$/, "") || "/";
  if (linkPath === currentPath || (linkPath !== "/" && currentPath.startsWith(linkPath))) {
    link.classList.add("is-active");
  }
});

inquiryForms.forEach((inquiryForm) => {
  const formNote = inquiryForm.querySelector("[data-form-note]");
  const submitButton = inquiryForm.querySelector('button[type="submit"]');
  const defaultSubmitLabel = submitButton ? submitButton.textContent : "";

  const setFormNote = (message, state = "neutral") => {
    if (!formNote) return;
    formNote.textContent = message;
    formNote.classList.toggle("is-success", state === "success");
    formNote.classList.toggle("is-error", state === "error");
  };

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
    };

    if (!payload.name || !payload.email || !payload.message) {
      setFormNote("Please add your name, email, and project message before sending.", "error");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending RFQ...";
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Contact endpoint unavailable");
      }

      inquiryForm.reset();
      setFormNote("Inquiry received. YUJI will review the details and reply from info@yujihealth.com.", "success");
    } catch (error) {
      setFormNote("Online submission is temporarily unavailable. Email info@yujihealth.com with your market, volume, packaging, and document needs.", "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = defaultSubmitLabel;
      }
    }
  });
});
