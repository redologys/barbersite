import re

# Fix vendor.css gold color
with open("css/vendor.css", "r", encoding="utf-8") as f:
    css = f.read()

css = css.replace("#c9a170", "#CC0000")
css = css.replace("#70654a", "#880000")
css = css.replace("#716647", "#880000")

with open("css/vendor.css", "w", encoding="utf-8") as f:
    f.write(css)

print("CSS colors fixed.")

# Fix HTML meta tags
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Fix title
html = re.sub(r'<title>[^<]*</title>', '<title>Showtime Cuts - Queens, NY</title>', html)

# Fix meta description
html = re.sub(r'<meta content="[^"]*Webflow[^"]*" name="description"', '<meta content="Showtime Cuts - Premium barbershop in South Ozone Park, Queens NY. Haircuts, shaves, and grooming services." name="description"', html)

# Fix OG tags
html = re.sub(r'property="og:title"[^/]*/>', 'property="og:title" content="Showtime Cuts"/>', html)
html = re.sub(r'property="og:description"[^/]*/>', 'property="og:description" content="Premium barbershop in Queens, NY"/>', html)
html = re.sub(r'name="twitter:title"[^/]*/>', 'name="twitter:title" content="Showtime Cuts"/>', html)

# Remove Webflow generator tag
html = html.replace('<meta content="Webflow" name="generator"/>', '')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Meta tags fixed.")