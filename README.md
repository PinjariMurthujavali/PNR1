# PNR Architecture — Website

Marketing website for PNR Architecture (Ameerpet, Hyderabad) — architectural design, interior design, and civil & steel structural engineering.

## Structure

```
.
├── index.html          Home — hero, services teaser, project teaser, why-choose, CTA
├── about.html           About — studio story, process steps, why-choose, CTA
├── services.html         Services — full services grid, structural drawing sets, CTA
├── projects.html         Projects — filterable gallery (Residential / Interiors / Steel & Industrial)
├── contact.html           Contact — contact details + WhatsApp enquiry form
├── styles.css            All styling, shared by every page (tokens/colors at the top under :root)
├── script.js              Mobile nav toggle, gallery tabs, WhatsApp enquiry form handler
└── assets/img/            Project photos and drawing sheets used across the site
```

Every page shares the same header, nav, footer, floating call/WhatsApp buttons, and mobile bottom bar — built by hand into each HTML file (no templating step). If you edit the nav, footer, or contact number, update it in all five `.html` files.

No build step, no dependencies — plain HTML/CSS/JS. Open `index.html` directly in a browser, or serve the folder with any static file server.

## Local preview

```bash
# from inside this folder
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy free on GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Editing

- **Colors / fonts / spacing** — edit the `:root` variables and rules at the top of `styles.css`.
- **Phone number / WhatsApp number** — search `9652447849` across `index.html` and `script.js` and replace everywhere (it appears in `tel:` links, `wa.me` links, and visible text).
- **Photos** — swap files in `assets/img/`, keeping the same filenames, or update the `src` paths in `index.html` if you rename them.
- **Copy** — all section text lives directly in `index.html`.

## Contact info currently used on the site

- Phone / WhatsApp: **96524 47849**
- Email: **pnr.architecture2024@gmail.com**
- Location: Ameerpet, Hyderabad, Telangana
