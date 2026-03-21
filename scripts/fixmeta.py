with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace(
    '<meta content="Stylish - Webflow HTMLwebsite template" property="og:title">',
    '<meta content="Showtime Cuts - Barbershop in Queens, NY" property="og:title">'
)

html = html.replace(
    '<meta content="Stylish Barbershop is a sophisticated and striking Webflow template tailored for grooming professionals dedicated to crafting a distinguished client experience. Designed for master barbers, stylists, and modern grooming studios, this template provides a powerful foundation to showcase your artistry, highlight your unique services, and attract a discerning clientele." property="og:description">',
    '<meta content="Showtime Cuts - Premium barbershop in South Ozone Park, Queens NY. Haircuts, fades, shaves and grooming. Call (347) 622-5047." property="og:description">'
)

html = html.replace(
    '<meta content="https://cdn.prod.website-files.com/68f457f4d7ca3dac6e9dfb08/691c1c85616c7349fa771b75_preview-1.webp" property="og:image">',
    '<meta content="./logo.png" property="og:image">'
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")