# One-time asset pipeline: brand-assets/photos -> public/images
# - lowercase web-safe names (GitHub Pages is case-sensitive)
# - long edge ~1600px, JPEG quality tuned to land ~200-400KB
# - transparent-background logo PNGs + favicons derived from the logo
import os
from PIL import Image, ImageOps

SRC = os.path.join(os.path.dirname(__file__), "..", "brand-assets", "photos")
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")
APP = os.path.join(os.path.dirname(__file__), "..", "app")
os.makedirs(OUT, exist_ok=True)
os.makedirs(APP, exist_ok=True)

PHOTOS = {
    "IMG_6435.JPG": "borehole-drilling.jpg",     # drilling rig at work
    "IMG_7108.JPG": "team-celebration.jpg",      # muddy drill team celebrating
    "IMG_6158.JPG": "community-meeting.jpg",     # needs assessment under the tree
    "IMG_6160.JPG": "aid-delivery.jpg",          # medical/aid delivery from van
    "bff764ab-810b-4f3d-aa25-b5a3eb9b2068.JPG": "us-nigeria-partnership.jpg",
    "IMG_3381.JPG": "team-leaders.jpg",          # two men in front of building
    "IMG_8118.JPG": "branding-banner.jpg",       # children + Africa map banner
}

def save_photo(src_name, out_name, long_edge=1600):
    im = Image.open(os.path.join(SRC, src_name))
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    scale = long_edge / max(w, h)
    if scale < 1:
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    for q in (80, 74, 68, 62):
        path = os.path.join(OUT, out_name)
        im.save(path, "JPEG", quality=q, optimize=True, progressive=True)
        kb = os.path.getsize(path) / 1024
        if kb <= 420:
            break
    print(f"{out_name}: {im.size[0]}x{im.size[1]} {kb:.0f}KB (q={q})")

for src, out in PHOTOS.items():
    save_photo(src, out)

# ---- Logo: white background -> transparency ----
logo = Image.open(os.path.join(SRC, "IMG_4260.JPG"))
logo = ImageOps.exif_transpose(logo).convert("RGB")
rgba = logo.convert("RGBA")
px = rgba.load()
w, h = rgba.size
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        lum = (r + g + b) / 3
        # near-white -> transparent, with a soft ramp to keep edges clean
        if lum > 245 and abs(r - g) < 12 and abs(g - b) < 12:
            px[x, y] = (r, g, b, 0)
        elif lum > 215 and abs(r - g) < 12 and abs(g - b) < 12:
            alpha = int(255 * (245 - lum) / 30)
            px[x, y] = (r, g, b, alpha)

# trim transparent margins
bbox = rgba.getbbox()
rgba = rgba.crop(bbox)
full = rgba.copy()
full.thumbnail((900, 1200), Image.LANCZOS)
full.save(os.path.join(OUT, "logo.png"), "PNG", optimize=True)
print("logo.png:", full.size)

# pump-only mark: top portion above the wordmark (wordmark starts ~40% down after trim)
w2, h2 = rgba.size
mark = rgba.crop((0, 0, w2, int(h2 * 0.40)))
mark = mark.crop(mark.getbbox())
mw, mh = mark.size
side = max(mw, mh) + int(max(mw, mh) * 0.14)
sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
sq.paste(mark, ((side - mw) // 2, (side - mh) // 2), mark)
sq_512 = sq.resize((512, 512), Image.LANCZOS)
sq_512.save(os.path.join(OUT, "logo-mark.png"), "PNG", optimize=True)
print("logo-mark.png: 512x512")

# favicons: white rounded-feel background so the mark reads at tiny sizes
def favicon(size):
    bg = Image.new("RGBA", (512, 512), (255, 255, 255, 255))
    bg.paste(sq_512, (0, 0), sq_512)
    return bg.resize((size, size), Image.LANCZOS)

favicon(32).save(os.path.join(APP, "icon.png"), "PNG")
favicon(180).save(os.path.join(APP, "apple-icon.png"), "PNG")
ico = favicon(48)
ico.save(os.path.join(APP, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
print("favicons written to app/")

# OG image: 1200x630 crop of the drilling photo
og_src = Image.open(os.path.join(OUT, "borehole-drilling.jpg"))
ow, oh = og_src.size
target = 1200 / 630
cw = ow
ch = int(ow / target)
if ch > oh:
    ch = oh
    cw = int(oh * target)
left = (ow - cw) // 2
top = (oh - ch) // 2
og = og_src.crop((left, top, left + cw, top + ch)).resize((1200, 630), Image.LANCZOS)
og.save(os.path.join(OUT, "og-image.jpg"), "JPEG", quality=78, optimize=True)
print("og-image.jpg: 1200x630")
