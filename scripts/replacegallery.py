import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Your available images
gallery_images = [
    "./2020-09-27.png",
    "./2020-09-27 (2).png",
    "./2020-09-27 (4).png",
    "./2020-09-27 (6).png",
    "./2020-09-27 (8).png",
    "./0FCA51D7-829D-4AAB-B08B-1B9498C7BF8D (1).png",
]

counter = [0]

def replace_gallery(match):
    img = f'<img src="{gallery_images[counter[0] % len(gallery_images)]}" loading="lazy" alt="Gallery" class="gallery-thumb">'
    counter[0] += 1
    return img

html = re.sub(
    r'<img[^>]*class="[^"]*gallery-thumb[^"]*"[^>]*>',
    replace_gallery,
    html
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print(f"Replaced {counter[0]} gallery images.")