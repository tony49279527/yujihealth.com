const links = {
  home: "https://yujihealth.com/",
  about: "https://yujihealth.com/about/",
  cups: "https://yujihealth.com/products/menstrual-cups/",
  contact: "https://yujihealth.com/contact/",
};

const productLines = [
  {
    number: "01",
    title: "Menstrual cups",
    copy: "Reusable cup programs with product, color, size, packaging and documentation options for established and emerging brands.",
    image: "/menstrual-cups-oem.jpg",
    alt: "Menstrual cups prepared for private-label OEM programs",
  },
  {
    number: "02",
    title: "Reusable discs",
    copy: "Disc formats and private-label configurations developed through a controlled sampling and specification review process.",
    image: "/menstrual-discs-oem.jpg",
    alt: "Reusable menstrual discs for OEM and ODM sourcing",
  },
  {
    number: "03",
    title: "Pads & liners",
    copy: "Sanitary pads and liners configured around absorbency format, dimensions, materials, pack count and retail presentation.",
    image: "/pads-liners-oem.jpg",
    alt: "Private-label sanitary pads and liners",
  },
  {
    number: "04",
    title: "Intimate care & kits",
    copy: "Complementary intimate care products, private-label kits, inserts and packaging for coherent feminine care portfolios.",
    image: "/product-lineup.jpg",
    alt: "YUJI feminine care product lineup and private-label kits",
  },
];

const process = [
  ["01", "Define", "Share target market, product format, materials, pack architecture, quantities and required documentation."],
  ["02", "Review", "Compare feasible product and packaging options, specifications, testing scope and commercial parameters."],
  ["03", "Validate", "Evaluate structured samples and confirm the product specification, artwork and document checklist."],
  ["04", "Scale", "Approve production controls, inspection criteria and shipment requirements before order scaling."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href={links.home} aria-label="Visit the YUJI Health main website">
          <img src="/yuji-logo.svg" alt="" width="42" height="42" />
          <span><strong>YUJI</strong><small>Feminine Care OEM / ODM</small></span>
        </a>
        <nav aria-label="Page navigation">
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="#quality">Quality</a>
          <a className="navCta" href={links.contact}>Start an RFQ <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Export programs for global brands</p>
          <h1 id="hero-title">Feminine care OEM manufacturer for global brands.</h1>
          <p className="lede">Controlled production, structured documentation and private-label support for menstrual care and intimate care portfolios.</p>
          <div className="heroActions">
            <a className="button primary" href={links.contact}>Request an OEM review <span aria-hidden="true">↗</span></a>
            <a className="textLink" href={links.home}>Visit YUJI Health <span aria-hidden="true">→</span></a>
          </div>
          <dl className="proofRow">
            <div><dt>Product scope</dt><dd>Cups · Discs · Pads · Care</dd></div>
            <div><dt>Program support</dt><dd>OEM · ODM · Private label</dd></div>
            <div><dt>Buyer focus</dt><dd>Specifications · Evidence · Scale</dd></div>
          </dl>
        </div>
        <div className="heroVisual">
          <img src="/hero-products.jpg" alt="YUJI menstrual cups, reusable disc, pads and intimate care products for OEM buyers" />
          <div className="imageNote"><span>YUJI / PRODUCT PORTFOLIO</span><strong>Built around your specification.</strong></div>
        </div>
      </section>

      <section className="section products" id="products" aria-labelledby="products-title">
        <div className="sectionHead">
          <div><p className="kicker">01 / Product scope</p><h2 id="products-title">One manufacturing partner.<br />A broader care portfolio.</h2></div>
          <p>YUJI supports retail brands, e-commerce operators, subscription programs and health product portfolios with coordinated product, private-label kit and packaging options.</p>
        </div>
        <div className="productGrid">
          {productLines.map((item) => (
            <article className="productCard" key={item.number}>
              <div className="productImage"><img src={item.image} alt={item.alt} loading="lazy" /></div>
              <div className="productText"><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
        <p className="inlineCallout">Explore YUJI as a <a href={links.home}>feminine care OEM manufacturer in China</a>, or review its <a href={links.cups}>menstrual cup OEM supplier program for global brands</a>.</p>
      </section>

      <section className="section processSection" id="process" aria-labelledby="process-title">
        <div className="processIntro">
          <p className="kicker light">02 / OEM & ODM process</p>
          <h2 id="process-title">A clear path from brief to repeatable production.</h2>
          <p>The workflow is designed to turn buyer requirements into reviewable specifications, samples and production controls—without replacing the buyer’s own regulatory assessment.</p>
          <a className="button pale" href={links.about}>Learn about YUJI’s OEM manufacturing team <span aria-hidden="true">→</span></a>
        </div>
        <ol className="processList">
          {process.map(([number, title, copy]) => (
            <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="section quality" id="quality" aria-labelledby="quality-title">
        <div className="qualityImage">
          <img src="/factory-lab.jpg" alt="YUJI quality staff reviewing feminine care production documentation" loading="lazy" />
          <div className="caption">Documentation and production review</div>
        </div>
        <div className="qualityCopy">
          <p className="kicker">03 / Process & quality</p>
          <h2 id="quality-title">Evidence belongs in the conversation.</h2>
          <p>Material control, structured sampling and traceable production records help procurement teams evaluate a program on documented criteria. Available documentation can be scoped against the product, destination market and buyer requirements.</p>
          <div className="qualityGrid">
            <article><span>01</span><h3>Material control</h3><p>Review material specifications and relevant supplier or batch records for the selected program.</p></article>
            <article><span>02</span><h3>Documentation packs</h3><p>Align the expected specification, inspection, testing and shipment documents before production.</p></article>
            <article><span>03</span><h3>Testing support</h3><p>Discuss applicable certifications and independent third-party testing without assuming one report fits every market.</p></article>
            <article><span>04</span><h3>Traceable production</h3><p>Define sampling, approval and production checkpoints so decisions remain reviewable as orders scale.</p></article>
          </div>
          <p className="complianceNote">Certifications, reports and compliance support vary by product and market. Qualified buyers should request the relevant current documents for review.</p>
        </div>
      </section>

      <section className="section collaboration" aria-labelledby="collaboration-title">
        <div className="sectionHead compact">
          <div><p className="kicker">04 / How brands work with YUJI</p><h2 id="collaboration-title">Keep each decision visible.</h2></div>
          <p>A practical collaboration moves in sequence: share requirements, review product and packaging options, validate samples, confirm documents, then scale orders against agreed controls.</p>
        </div>
        <div className="channelBand">
          <span>RETAIL BRANDS</span><i /> <span>E-COMMERCE</span><i /> <span>SUBSCRIPTION</span><i /> <span>HEALTH PORTFOLIOS</span>
        </div>
        <div className="linkPanel">
          <div><p className="kicker">Useful next steps</p><h3>Review the source materials that match your brief.</h3></div>
          <div className="resourceLinks">
            <a href={links.cups}><span>Product category</span><strong>Menstrual cup OEM options</strong><b>↗</b></a>
            <a href={links.about}><span>Company background</span><strong>About YUJI Health</strong><b>↗</b></a>
            <a href={links.contact}><span>Procurement inquiry</span><strong>Private-label sanitary pads and liners RFQ</strong><b>↗</b></a>
          </div>
        </div>
      </section>

      <section className="rfq" aria-labelledby="rfq-title">
        <div>
          <p className="kicker light">05 / RFQ & contact</p>
          <h2 id="rfq-title">Bring the brief.<br />We’ll structure the next review.</h2>
        </div>
        <div className="rfqCopy">
          <p>Qualified buyers can share the product format, target market, estimated volume, packaging direction and documentation needs through YUJI’s main inquiry form.</p>
          <a className="button white" href={links.contact}>Request a feminine care OEM RFQ and compliance checklist <span aria-hidden="true">↗</span></a>
          <p className="contactLine">Main website: <a href={links.home}>yujihealth.com</a></p>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href={links.home} aria-label="YUJI Health homepage">
          <img src="/yuji-logo.svg" alt="" width="38" height="38" />
          <span><strong>YUJI</strong><small>Care built for global brands</small></span>
        </a>
        <p>Feminine care OEM / ODM · Private-label manufacturing · Global brand support</p>
        <a href={links.contact}>Contact YUJI <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
