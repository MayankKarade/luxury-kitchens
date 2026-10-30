"""Generate real 1200x630 branded share cards referenced by the SEO workbook.

These use the existing company logo, not unverified project photography.
Run with the bundled Python runtime (Pillow required).
"""
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
source = json.loads((root / "src/data/seoMetadata.json").read_text(encoding="utf-8"))
cards = {"/og/brand.jpg": "Custom Kitchens & Furniture | Cali Wood"}
for page in source["pages"]:
    cards.setdefault(page["OG Image (create asset)"], page["OG Title"])
cards["/og/locations.jpg"] = "Cali Wood Locations in Ghana & the USA"

fonts = Path("C:/Windows/Fonts")
heading = ImageFont.truetype(str(fonts / "georgia.ttf"), 56)
small = ImageFont.truetype(str(fonts / "segoeuib.ttf"), 19)
footer = ImageFont.truetype(str(fonts / "segoeui.ttf"), 24)
logo = Image.open(root / "public/logo/caliwoodnavLogo.png").convert("RGBA")
logo.thumbnail((310, 100), Image.Resampling.LANCZOS)

for asset, title in cards.items():
    image = Image.new("RGB", (1200, 630), "#010129")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 12, 630), fill="#9a0101")
    draw.rounded_rectangle((62, 48, 62 + logo.width + 30, 78 + logo.height), radius=8, fill="white")
    image.paste(logo, (77, 63), logo)
    draw.text((64, 210), "CUSTOM CABINETRY & FURNITURE", fill="#e5b5b5", font=small)
    text = title.replace(" | Cali Wood Ghana", "").replace(" | Cali Wood", "").replace("Cali Wood | ", "")
    lines, line = [], ""
    for word in text.split():
        candidate = (line + " " + word).strip()
        if draw.textlength(candidate, font=heading) > 1040 and line:
            lines.append(line)
            line = word
        else:
            line = candidate
    if line:
        lines.append(line)
    for index, line in enumerate(lines):
        draw.text((62, 255 + index * 74), line, fill="white", font=heading)
    draw.rectangle((64, 512, 1136, 514), fill="#38384f")
    draw.text((64, 546), "caliwoodgh.com", fill="#e5e5eb", font=footer)
    draw.text((928, 546), "CALI WOOD", fill="#e5b5b5", font=small)
    destination = root / "public" / asset.lstrip("/")
    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, quality=91, optimize=True)

print(f"Generated {len(cards)} branded Open Graph images.")
