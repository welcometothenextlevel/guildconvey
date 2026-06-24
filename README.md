# Guild Conveyancing Website v2

Premium dark luxury static website. Upload ALL files to GitHub repository root.

## GitHub Pages Setup
1. Push all files to your GitHub repo root
2. Settings → Pages → Source: Deploy from branch → main → / (root)
3. Live in ~2 minutes at `https://[username].github.io/[repo]/`

## Custom Domain
Add a `CNAME` file containing `guildconveyancing.com.au`
Set DNS: CNAME → `[username].github.io`

## Before going live — update these:
- `main.js` line ~85: Replace `XXXXXX` with your Formspree form ID (formspree.io)
- All pages: Replace `1300 XXX XXX` with real phone number
- All pages: Replace `hello@guildconveyancing.com.au` with real email
- All pages: Replace `ABN XX XXX XXX XXX` with real ABN

## Images
All images load from Unsplash CDN — no download needed, free to use.
If you want to self-host images, download from unsplash.com and update the src URLs.

## Pages
| File | Page |
|---|---|
| index.html | Homepage |
| locations.html | All Locations (3-state tab) |
| victoria.html | Victoria |
| south-australia.html | South Australia |
| queensland.html | Queensland |
| buying.html | Buying |
| selling.html | Selling |
| transfer.html | Property Transfer |
| contract-review.html | Contract Review |
| quote.html | Quote Calculator + Form |
| about.html | About + Team |
| contact.html | Contact Form |
| faq.html | FAQ (with Google schema) |
| blog.html | Blog |
| 404.html | 404 Error Page |
