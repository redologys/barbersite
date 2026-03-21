import re

with open("css/vendor.css", "r", encoding="utf-8") as f:
    css = f.read()

# Find marquee-title and replace its background-image
css = re.sub(
    r'(\.marquee-title\s*\{[^}]*background-image:\s*)linear-gradient\([^)]+\)',
    r'\1linear-gradient(90deg, #CC0000, #880000)',
    css,
    flags=re.DOTALL
)

with open("css/vendor.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Done.")