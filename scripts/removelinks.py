import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace all external stylishz.webflow.io links with #
html = re.sub(r'href="https://stylishz\.webflow\.io[^"]*"', 'href="#"', html)

# Replace any other external http links except CDN resources
html = re.sub(r'href="https?://(?!cdn\.prod\.website-files)[^"]*"', 'href="#"', html)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")