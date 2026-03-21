import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# Replace team member photos with placeholder
html = re.sub(
    r'<img src="data:image/webp;base64,[^"]*"\s*loading="lazy"[^>]*class="[^"]*team-item-thumb[^"]*"[^>]*>',
    '<img src="./default-avatar-photo-placeholder-profile-image-vector.jpg" loading="lazy" class="team-item-thumb" style="width:100%;height:100%;object-fit:cover;">',
    html
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("Done.")