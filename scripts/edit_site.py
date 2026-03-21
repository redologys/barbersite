import re

INPUT_FILE = "index.html"
OUTPUT_FILE = "index.html"

with open(INPUT_FILE, "r", encoding="utf-8") as f:
    html = f.read()

original = html
changes = []

# ─────────────────────────────────────────────────────────────
# 1. LOGO — Find the w-nav-brand anchor and inject logo img
# Webflow navbar brand is: <a class="w-nav-brand" href="/">
# We replace its contents with our logo image
# ─────────────────────────────────────────────────────────────
logo_pattern = re.compile(
    r'(<a\b[^>]*class="[^"]*w-nav-brand[^"]*"[^>]*>)(.*?)(</a>)',
    re.DOTALL | re.IGNORECASE
)
logo_replacement = r'\1<img src="logo.png" alt="Showtime Cuts Logo" style="height:50px; width:auto;">\3'
new_html, count = logo_pattern.subn(logo_replacement, html, count=1)
if count:
    html = new_html
    changes.append(f"✅ Logo replaced inside w-nav-brand ({count} match)")
else:
    changes.append("⚠️  Logo: w-nav-brand not found as HTML tag — may be in JS blob")

# ─────────────────────────────────────────────────────────────
# 2. STARS — Webflow star icons use Unicode &#11088; or SVG paths
# Search broadly since they weren't found by class
# ─────────────────────────────────────────────────────────────

# 2a. Try color style on any element containing star SVG paths
star_svg = re.compile(
    r'(fill=")([#a-zA-Z0-9]+)("(?:[^>]*?)(?:star|rating|review|gold|tan|#c8a|#b89|#d4a|#a07))',
    re.IGNORECASE
)
new_html, count = star_svg.subn(r'\1#e30000\3', html)
if count:
    html = new_html
    changes.append(f"✅ Star SVG fill colors changed ({count} matches)")

# 2b. Unicode star characters with inline color
star_color = re.compile(
    r'(color\s*:\s*)([#a-zA-Z0-9]+)(\s*;[^"\'<]{0,100}[★⭐✩✦])',
    re.IGNORECASE
)
new_html, count = star_color.subn(r'\1#e30000\3', html)
if count:
    html = new_html
    changes.append(f"✅ Star unicode colors changed ({count} matches)")

# 2c. Webflow review star specific color (gold: #c8a96d or similar)
# Replace ALL occurrences of the gold color near star context
gold_fill = re.compile(r'fill="#c8a96[a-f0-9]"', re.IGNORECASE)
new_html, count = gold_fill.subn('fill="#e30000"', html)
if count:
    html = new_html
    changes.append(f"✅ Gold star fill (#c8a96x) → red ({count} matches)")

# ─────────────────────────────────────────────────────────────
# 3. GRADIENT TEXT above footer (scrolling marquee)
# Since linear-gradient wasn't found as plain text, it's likely
# inside a <style> block as escaped or minified CSS.
# Target the gold/tan color values used by Webflow templates.
# ─────────────────────────────────────────────────────────────

# 3a. Replace gold gradient color stops inside any style block
gold_gradient_colors = [
    "#b8976a", "#c9a96e", "#d4a853", "#a07850",
    "#8B6914", "#c8a96d", "#b5935a", "#bf9b6f",
    "#d4a96a", "#c8976a"
]
grad_count = 0
for color in gold_gradient_colors:
    new_html = html.replace(color, "#e30000")
    if new_html != html:
        grad_count += html.count(color)
        html = new_html

if grad_count:
    changes.append(f"✅ Gradient gold color stops replaced ({grad_count} matches)")
else:
    changes.append("⚠️  Gradient: gold color stops not found — run inspect_colors.py below to find exact values")

# ─────────────────────────────────────────────────────────────
# 4. WEBFLOW BADGE — Remove the JS function that injects it
# The badge is added by this JS pattern found in your file:
# function f(){ ... l.append(t) }
# We neutralize it by replacing the append call
# ─────────────────────────────────────────────────────────────

# Target the specific badge injection code found in your output
badge_patterns = [
    # Remove the append that injects the badge
    ('l.append(t)', '/* badge removed */'),
    # Also zero out the badge element if it exists in HTML
    ('class="w-webflow-badge"', 'class="w-webflow-badge" style="display:none!important"'),
]

for find, replace in badge_patterns:
    count = html.count(find)
    if count:
        html = html.replace(find, replace)
        changes.append(f"✅ Webflow badge: replaced '{find}' ({count} times)")
    else:
        changes.append(f"⚠️  Badge pattern not found: '{find}'")

# ─────────────────────────────────────────────────────────────
# SAVE
# ─────────────────────────────────────────────────────────────
print("\n".join(changes))

if html != original:
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"\n✅ Saved to {OUTPUT_FILE}")
else:
    print("\n⚠️  No changes made.")

# ─────────────────────────────────────────────────────────────
# BONUS: If stars/gradient still not right, run this to find
# the exact color values used in your file
# ─────────────────────────────────────────────────────────────
print("\n\n=== COLOR AUDIT (top colors in file) ===")
colors_found = re.findall(r'#[0-9a-fA-F]{6}', html)
from collections import Counter
top = Counter(colors_found).most_common(20)
for color, count in top:
    print(f"  {color}  ×{count}")
