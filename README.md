# stylishz editable template

- Source file: `2\stylishz-template.prettified.html`
- Working file: `index.html`
- CSS created: `css/vendor.css`, `css/overrides.css`
- JS created: `js/vendor.js`, `js/site.js`

What was extracted:
- The embedded `data:text/css` stylesheet was moved to `css/vendor.css`.
- Inline `<style>` blocks, when present, were moved to `css/overrides.css`.

What was intentionally left inline:
- All original script blocks were kept inline in `index.html` to preserve Webflow behavior, interactions, animation timing, and direct-file rendering from `file://`.
- `js/vendor.js` and `js/site.js` are placeholders only and are not loaded by default.

Section splitting:
- Full partial extraction was intentionally skipped.
- This restore returns the editable template to the normalized single-page baseline so layout and media match the original source again.
