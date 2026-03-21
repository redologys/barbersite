import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace the base64 logo img inside logo-wrap with our logo.png
html = re.sub(
    r'(<a[^>]*class="[^"]*logo-wrap[^"]*"[^>]*>)\s*<img[^>]*>',
    r'\1<img src="./logo.png" alt="Showtime Cuts" style="height:45px;width:auto;">',
    html
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")