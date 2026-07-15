#!/usr/bin/env python3
from pathlib import Path
import shutil

from reportlab.graphics.barcode import qr
from reportlab.graphics.shapes import Drawing
from reportlab.graphics import renderPDF
from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "yuji-feminine-care-oem-line-sheet.pdf"
DOWNLOAD = ROOT / "downloads" / "yuji-feminine-care-oem-line-sheet.pdf"
PAGE_W, PAGE_H = A4

INK = HexColor("#24212A")
MUTED = HexColor("#5C6763")
TEAL = HexColor("#167A74")
TEAL_DARK = HexColor("#0F5E59")
PLUM = HexColor("#6F3654")
ROSE = HexColor("#D8A0B4")
PALE = HexColor("#F3F7F5")
WARM = HexColor("#FFF8F5")
LINE = HexColor("#D9E7E1")


def image_path(name):
    return ROOT / "assets" / "images" / name


def wrap_lines(text, font, size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def paragraph(c, text, x, y, width, size=10, leading=14, color=MUTED, font="Helvetica"):
    c.setFillColor(color)
    c.setFont(font, size)
    for line in wrap_lines(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def label(c, text, x, y, color=TEAL):
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", 8)
    c.drawString(x, y, text.upper())


def title(c, text, x, y, width, size=27, color=INK, leading=None):
    leading = leading or size * 1.08
    c.setFillColor(color)
    c.setFont("Helvetica-Bold", size)
    for line in wrap_lines(text, "Helvetica-Bold", size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_image_crop(c, path, x, y, width, height):
    image = ImageReader(str(path))
    iw, ih = image.getSize()
    scale = max(width / iw, height / ih)
    draw_w, draw_h = iw * scale, ih * scale
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, width, height)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(image, x + (width - draw_w) / 2, y + (height - draw_h) / 2, draw_w, draw_h, mask="auto")
    c.restoreState()


def header(c, section):
    c.setFillColor(INK)
    c.rect(0, PAGE_H - 42, PAGE_W, 42, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(34, PAGE_H - 27, "YUJI")
    c.setFont("Helvetica", 8)
    c.drawRightString(PAGE_W - 34, PAGE_H - 27, section)


def footer(c, page_number):
    c.setStrokeColor(LINE)
    c.line(34, 28, PAGE_W - 34, 28)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 7.5)
    c.drawString(34, 15, "yujihealth.com  |  info@yujihealth.com")
    c.drawRightString(PAGE_W - 34, 15, f"{page_number} / 8")


def rounded_box(c, x, y, width, height, fill=white, stroke=LINE, radius=8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.roundRect(x, y, width, height, radius, stroke=1, fill=1)


def fact(c, x, y, width, value, caption, fill=PALE):
    rounded_box(c, x, y, width, 68, fill=fill)
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 18)
    c.drawString(x + 12, y + 38, value)
    paragraph(c, caption, x + 12, y + 22, width - 24, size=8, leading=10)


def bullet_list(c, items, x, y, width, size=9.5, leading=13, color=MUTED):
    for item in items:
        c.setFillColor(TEAL)
        c.circle(x + 3, y + 2, 2.2, stroke=0, fill=1)
        y = paragraph(c, item, x + 12, y + 5, width - 12, size=size, leading=leading, color=color)
        y -= 7
    return y


def product_page(c, page_number, name, eyebrow, image_name, intro, facts, bullets, rfq):
    header(c, f"PRODUCT LINE 0{page_number - 3}")
    draw_image_crop(c, image_path(image_name), 34, PAGE_H - 318, PAGE_W - 68, 240)
    c.setFillColor(Color(0.14, 0.13, 0.16, alpha=0.72))
    c.rect(34, PAGE_H - 318, PAGE_W - 68, 62, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 22)
    c.drawString(50, PAGE_H - 292, name)
    c.setFont("Helvetica", 9)
    c.drawString(50, PAGE_H - 308, eyebrow)

    y = PAGE_H - 350
    y = paragraph(c, intro, 42, y, PAGE_W - 84, size=10.5, leading=15, color=INK)
    y -= 12
    card_w = (PAGE_W - 96) / 3
    for index, (value, caption) in enumerate(facts):
        fact(c, 34 + index * (card_w + 14), y - 68, card_w, value, caption, fill=WARM if index == 1 else PALE)
    y -= 100
    label(c, "Buyer decisions", 42, y)
    y -= 18
    y = bullet_list(c, bullets, 42, y, PAGE_W - 84)

    rounded_box(c, 34, 58, PAGE_W - 68, 76, fill=INK, stroke=INK)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 11)
    c.drawString(50, 108, "Send this in the RFQ")
    paragraph(c, rfq, 50, 90, PAGE_W - 100, size=9, leading=12, color=white)
    footer(c, page_number)
    c.showPage()


def build_pdf(output_path):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(output_path), pagesize=A4)
    c.setTitle("YUJI Feminine Care OEM Line Sheet")
    c.setAuthor("Xi'an Yuji Biotechnology Co., Ltd.")
    c.setSubject("Feminine care OEM/ODM product and procurement line sheet")

    # Page 1 - cover
    draw_image_crop(c, image_path("hero-products.jpg"), 0, 0, PAGE_W, PAGE_H)
    c.setFillColor(Color(1, 1, 1, alpha=0.88))
    c.rect(0, 0, PAGE_W * 0.64, PAGE_H, stroke=0, fill=1)
    c.setFillColor(PLUM)
    c.rect(0, 0, 12, PAGE_H, stroke=0, fill=1)
    label(c, "XI'AN, CHINA | OEM / ODM", 42, PAGE_H - 92)
    y = title(c, "Feminine care manufacturing for global brands.", 42, PAGE_H - 126, PAGE_W * 0.52, size=34)
    y -= 18
    y = paragraph(c, "Menstrual cups, reusable discs, sanitary pads, liners, accessories, and private-label launch support.", 42, y, PAGE_W * 0.49, size=12, leading=18, color=INK)
    c.setFillColor(INK)
    c.roundRect(42, 98, 286, 92, 8, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 13)
    c.drawString(60, 160, "YUJI")
    c.setFont("Helvetica", 9.5)
    c.drawString(60, 141, "Xi'an Yuji Biotechnology Co., Ltd.")
    c.drawString(60, 123, "yujihealth.com")
    c.drawString(60, 106, "info@yujihealth.com")
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(42, 54, "Product scope and document availability are confirmed project by project.")
    c.showPage()

    # Page 2 - company
    header(c, "COMPANY AND PROCUREMENT FIT")
    label(c, "Company profile", 34, PAGE_H - 78)
    y = title(c, "A clear manufacturing path before buyers request price.", 34, PAGE_H - 104, PAGE_W - 68, size=28)
    draw_image_crop(c, image_path("factory-lab.jpg"), 34, y - 236, PAGE_W - 68, 210)
    y -= 270
    fact_w = (PAGE_W - 110) / 4
    company_facts = [
        ("2019", "Founded in Xi'an"),
        ("3,200 sq m", "Factory footprint"),
        ("3M+", "Cumulative cup shipments"),
        ("30+", "Export markets served"),
    ]
    for index, (value, caption) in enumerate(company_facts):
        fact(c, 34 + index * (fact_w + 14), y - 68, fact_w, value, caption, fill=PALE if index % 2 == 0 else WARM)
    y -= 98
    label(c, "Procurement highlights", 34, y)
    y -= 18
    bullet_list(c, [
        "Medical-grade LSR silicone focus for cup and reusable disc programs.",
        "Private-label packaging across pouch, box, leaflet, barcode, kit, and carton requirements.",
        "Sample and trial-order planning before artwork and mass production.",
        "Specification, available certificate, QC release, packaging, and export document review by project.",
    ], 34, y, PAGE_W - 68)
    footer(c, 2)
    c.showPage()

    # Page 3 - portfolio
    header(c, "PRODUCT PORTFOLIO")
    label(c, "Product center", 34, PAGE_H - 78)
    y = title(c, "Three sourcing paths, one structured RFQ.", 34, PAGE_H - 104, PAGE_W - 68, size=28)
    products = [
        ("Menstrual cups", "menstrual-cups-oem.jpg", "S/M/L mainstream structures, classic/soft/sport directions, pouch and kit packaging."),
        ("Reusable discs", "menstrual-discs-oem.jpg", "50-65 ml reference capacities, rim and pull-ring options, reusable launch positioning."),
        ("Pads, liners and kits", "pads-liners-oem.jpg", "150-350 mm formats, material directions, wrappers, retail packs, and auxiliary SKUs."),
    ]
    card_h = 180
    for index, (name, image_name, copy) in enumerate(products):
        box_y = y - card_h - index * (card_h + 14)
        rounded_box(c, 34, box_y, PAGE_W - 68, card_h, fill=white)
        draw_image_crop(c, image_path(image_name), 35, box_y + 1, 206, card_h - 2)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 17)
        c.drawString(260, box_y + 136, name)
        paragraph(c, copy, 260, box_y + 112, PAGE_W - 300, size=10, leading=14)
        c.setFillColor(TEAL_DARK)
        c.setFont("Helvetica-Bold", 9)
        c.drawString(260, box_y + 30, ["1,000 pcs cup trial reference", "Custom color and packaging", "10,000 pcs pad trial reference"][index])
    footer(c, 3)
    c.showPage()

    product_page(
        c, 4, "Menstrual Cups", "Medical-grade silicone | private label | sample approval",
        "menstrual-cups-oem.jpg",
        "Cup programs can use existing structures for a faster launch or move into custom color, hardness, packaging, and kit development for larger programs.",
        [("S / M / L", "Mainstream size structure"), ("20-30 ml", "Classic capacity range"), ("1,000 pcs", "Trial MOQ reference")],
        [
            "Choose classic, soft, or sport direction based on channel and positioning.",
            "Confirm size mix, color, logo, pouch, box, leaflet language, and kit components.",
            "Review material files, sample feel, QC checkpoints, sterilization plan, and claim boundaries before artwork lock.",
            "Regular-order planning reference: 15-20 working days after approvals, subject to final scope.",
        ],
        "Target market, channel, cup sizes, expected quantity, color, packaging direction, sample needs, required documents, and launch date.",
    )

    product_page(
        c, 5, "Reusable Menstrual Discs", "Reusable format | pull-ring options | DTC and retail",
        "menstrual-discs-oem.jpg",
        "Disc projects are suited to reusable-care launches that need capacity, rim feel, removal design, education, and packaging reviewed as one product program.",
        [("50-65 ml", "Reference capacities"), ("2-3 years", "Reusable positioning"), ("Custom", "Color and pack support")],
        [
            "Select rim feel and removal design, including pull-ring direction where available.",
            "Plan education and packaging for DTC, Amazon, pharmacy, or premium wellness channels.",
            "Confirm dimensions, capacity reference, packaging artwork requirements, and QC inspection checkpoints.",
            "Request current material, certificate, test, and release records for the quoted product and market.",
        ],
        "Target market, channel, disc format, expected quantity, color, pull-ring direction, packaging, samples, document list, and timeline.",
    )

    product_page(
        c, 6, "Pads, Liners and Accessories", "Assortment depth | private label | distributor programs",
        "pads-liners-oem.jpg",
        "Disposable and auxiliary SKUs support broader retail shelves, reusable-care bundles, travel kits, distributor catalogs, and regional trial programs.",
        [("150-350 mm", "Pad and liner formats"), ("10,000 pcs", "Pad trial MOQ reference"), ("Bundle-ready", "Pouches, wipes and kits")],
        [
            "Define pad or liner format, absorbency direction, topsheet, wrapper, count, and retail pack.",
            "Confirm organic cotton, bamboo charcoal, or other material positioning only against actual product documentation.",
            "Use accessories such as storage pouches, wipes, sterilizing cups, and cleaning kits to build assortments.",
            "Request product specification, packaging bill of materials, carton data, test files, and QC release records.",
        ],
        "Target market, format, material direction, retail count, order quantity, wrapper and box needs, carton requirements, document list, and timeline.",
    )

    # Page 7 - process and evidence
    header(c, "OEM / ODM AND QUALITY")
    label(c, "Project path", 34, PAGE_H - 78)
    y = title(c, "From brief to export handoff.", 34, PAGE_H - 104, PAGE_W - 68, size=28)
    steps = [
        ("01", "Brief and sample", "Confirm market, channel, product, volume, packaging, and document needs."),
        ("02", "Customize and approve", "Review product direction, color, packaging, artwork, and sample approval."),
        ("03", "Trial production", "Verify dimensions, hardness or format, pack fit, process controls, and buyer records."),
        ("04", "Mass delivery", "Manage production, QC sampling, release files, cartons, and export handoff."),
    ]
    for index, (number, heading, copy) in enumerate(steps):
        box_y = y - 102 - index * 112
        rounded_box(c, 34, box_y, PAGE_W - 68, 92, fill=PALE if index % 2 == 0 else WARM)
        c.setFillColor(PLUM)
        c.setFont("Helvetica-Bold", 22)
        c.drawString(50, box_y + 48, number)
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 13)
        c.drawString(102, box_y + 56, heading)
        paragraph(c, copy, 102, box_y + 38, PAGE_W - 152, size=9, leading=12)
    rounded_box(c, 34, 76, PAGE_W - 68, 112, fill=INK, stroke=INK)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 12)
    c.drawString(50, 160, "Evidence buyers can request")
    paragraph(c, "Material specifications, product dimensions or format, available certificate scans, test summaries, first-article and in-process records, QC release, packaging files, carton data, and export handoff records.", 50, 140, PAGE_W - 100, size=9, leading=13, color=white)
    footer(c, 7)
    c.showPage()

    # Page 8 - RFQ and contact
    header(c, "REQUEST FOR QUOTATION")
    label(c, "RFQ checklist", 34, PAGE_H - 78)
    y = title(c, "Send one complete brief. Get the right product pack back.", 34, PAGE_H - 104, PAGE_W - 170, size=27)
    fields = [
        "Target country, language, and sales channel",
        "Product category, specification, and sample needs",
        "Trial order and forecast quantity",
        "Color, formula, packaging, label, barcode, and leaflet direction",
        "Required certificates, tests, QC records, and carton data",
        "Sample deadline, artwork date, launch window, and shipping terms",
    ]
    y -= 12
    y = bullet_list(c, fields, 42, y, PAGE_W - 200, size=10.5, leading=15)
    c.setFillColor(PLUM)
    c.roundRect(34, 182, PAGE_W - 68, 166, 10, stroke=0, fill=1)
    c.setFillColor(white)
    c.setFont("Helvetica-Bold", 19)
    c.drawString(54, 314, "Start the sourcing conversation")
    c.setFont("Helvetica", 11)
    c.drawString(54, 286, "Email: info@yujihealth.com")
    c.drawString(54, 264, "Web: yujihealth.com/contact/")
    c.drawString(54, 242, "Location: Xi'an, Shaanxi, China")
    paragraph(c, "Typical RFQ review target: 1-2 business days. Final MOQ, lead time, document availability, and claims depend on the approved product and market scope.", 54, 215, PAGE_W - 230, size=8.5, leading=12, color=white)
    widget = qr.QrCodeWidget("https://yujihealth.com/contact/")
    bounds = widget.getBounds()
    qr_size = 102
    drawing = Drawing(qr_size, qr_size, transform=[qr_size / (bounds[2] - bounds[0]), 0, 0, qr_size / (bounds[3] - bounds[1]), 0, 0])
    drawing.add(widget)
    renderPDF.draw(drawing, c, PAGE_W - 164, 214)
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 8)
    c.drawString(34, 120, "For B2B sourcing use. Product scope and document availability are reviewed project by project.")
    c.drawString(34, 104, "Buyer remains responsible for target-market registration, labels, importer duties, and claim approval.")
    footer(c, 8)
    c.showPage()

    c.save()


def main():
    build_pdf(OUTPUT)
    DOWNLOAD.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(OUTPUT, DOWNLOAD)
    print(f"Created {OUTPUT}")
    print(f"Copied {DOWNLOAD}")


if __name__ == "__main__":
    main()
