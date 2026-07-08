const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const inquiryForm = document.querySelector("[data-inquiry-form]");
const formNote = document.querySelector("[data-form-note]");

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

if (inquiryForm) {
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
}
