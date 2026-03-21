with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace team names
html = html.replace("Cristian M. Durant", "Barber 1")
html = html.replace("Felipe D. Hawthorne", "Barber 2")
html = html.replace("Javier C. Emerson", "Barber 3")
html = html.replace("Emilio J. Harper", "Barber 4")

# Replace titles
html = html.replace("Hair Stylist", "Title")
html = html.replace("Senior Barber", "Title")
html = html.replace("Beard Specialist", "Title")
html = html.replace("Grooming Expert", "Title")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")