with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace gallery author name and title
html = html.replace("Almond D. Dow", "Your Name")
html = html.replace("Founder", "Title")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")