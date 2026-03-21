with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

sections = {
    "NAV/LOGO": ["w-nav-brand", "navbar-brand", "nav-logo", "w-nav"],
    "STARS": ["w-icon-star", "star-rating", "rating-star", "★", "&#9733"],
    "GRADIENT TEXT": ["linear-gradient", "background-clip: text", "-webkit-background-clip"],
    "WEBFLOW BADGE": ["w-webflow-badge", "made in webflow", "webflow.com/made-in"],
}

for section, keywords in sections.items():
    print(f"\n{'='*60}")
    print(f"=== {section} ===")
    print(f"{'='*60}")
    found = False
    for kw in keywords:
        idx = html.lower().find(kw.lower())
        if idx != -1:
            print(f"\n[Found '{kw}' at index {idx}]")
            print(html[max(0, idx-300):idx+600])
            print("---")
            found = True
            break
    if not found:
        print(f"⚠️  None of the keywords found for {section}")
