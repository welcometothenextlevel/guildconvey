# Guild Conveyancing Website

Static HTML/CSS/JS website for Guild Conveyancing.

## Files
- `index.html` — Homepage
- `locations.html` — All locations (VIC, SA, QLD tabs)
- `victoria.html` — Victoria state page
- `south-australia.html` — South Australia state page
- `queensland.html` — Queensland state page
- `buying.html` — Buying service
- `selling.html` — Selling service
- `transfer.html` — Property transfer service
- `contract-review.html` — Contract review service
- `quote.html` — Quote calculator + form
- `about.html` — About page
- `contact.html` — Contact + form
- `faq.html` — FAQ with schema markup
- `blog.html` — Blog index
- `404.html` — 404 error page
- `styles.css` — All shared styles
- `main.js` — All shared JavaScript
- `logo.webp` — Brand logo
- `sitemap.xml` — SEO sitemap
- `robots.txt` — Crawler rules

## GitHub Pages Setup
1. Upload ALL files to your GitHub repository root
2. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
3. Your site will be live at `https://[username].github.io/[repo]/`

## Custom Domain (guildconveyancing.com.au)
1. Add a `CNAME` file to the repo containing: `guildconveyancing.com.au`
2. In your DNS provider, add: CNAME record → `[username].github.io`

## Forms
Replace `XXXXXX` in `quote.html` and `contact.html` with your Formspree form ID.
Sign up free at formspree.io, create a form, copy the ID.

## Analytics
Replace `GTM-XXXXXXX` with your real GTM container ID if using Google Tag Manager.
