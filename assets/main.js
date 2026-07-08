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
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(inquiryForm);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const product = String(data.get("product") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(`YUJI inquiry: ${product || "OEM/ODM"}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Product interest: ${product}`,
        "",
        "Message:",
        message || "Please send product specifications, MOQ, sample policy, and quotation details.",
      ].join("\n"),
    );

    window.location.href = `mailto:info@yujihealth.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Your mail app should open with a prepared inquiry draft.";
    }
  });
});
