import re

with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

html = html.replace('../images/', './')
html = html.replace("+123 456 789 00", "(347) 622-5047")
html = html.replace("12/a, new bustin tower NYC, US", "108-01 Rockaway Blvd, South Ozone Park, NY 11420")
html = html.replace("info@saloni.com", "showtimecuts.resurva.com")
html = re.sub(r'<p[^>]*>Design copyright by.*?</p>', '', html, flags=re.DOTALL)
html = re.sub(r'<img src="data:image/svg\+xml;base64,[^"]+"\s*[^>]*class="[^"]*footer-logo[^"]*"[^>]*>', '<img src="./logo.png" alt="Showtime Cuts" class="footer-logo">', html)

start = html.find('blog &amp; insights')
if start != -1:
    open_tag = html.rfind('<div', 0, start - 3000)
    end_text = html.find('New stylist joins popular', start)
    close = html.find('</div>', end_text)
    for _ in range(15):
        close = html.find('</div>', close + 1)
    html = html[:open_tag] + html[close + 6:]
    print("Blog removed")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("allfix done.")