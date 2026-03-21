with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

start = html.find('<div class="blog-section">')
if start != -1:
    depth = 0
    pos = start
    while pos < len(html):
        next_open = html.find('<div', pos)
        next_close = html.find('</div>', pos)
        if next_close == -1:
            break
        if next_open != -1 and next_open < next_close:
            depth += 1
            pos = next_open + 1
        else:
            depth -= 1
            pos = next_close + 6
            if depth == 0:
                break
    html = html[:start] + html[pos:]
    print("Subscribe removed")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Done.")