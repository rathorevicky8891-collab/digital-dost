# Digital Dost — editable static website

This folder contains a plain HTML/CSS/JavaScript version of Digital Dost. It does not need React, Node, or a build command, and it can be hosted as a static site on Netlify.

## Files
- `index.html` — home page
- `products.html` — product search, category filters, cards
- `products.js` — product catalogue; edit this to add products and affiliate URLs
- `about.html`, `contact.html`, `privacy.html`, `disclosure.html` — information pages
- `styles.css` — layout and styling
- `script.js` — navigation and product filtering

## Upload all files to GitHub in one go
1. Download and extract `digital-dost-source.zip` on your computer.
2. Open your GitHub repository `digital-dost`.
3. Choose **Add file → Upload files**.
4. Open the extracted folder and select all files inside it (not the ZIP itself), then drag them to GitHub.
5. Commit the changes to the `main` branch.
6. In Netlify, open the `digital-dost-update` project → **Project configuration → Developer settings → Repository** and connect the GitHub repo. If Netlify does not offer linking from that existing project, create a separate new Netlify site from the GitHub repo; do not delete the current live site.
7. For this plain static site, use the repository root as the publish directory and leave the build command blank. If Netlify requires a publish directory, enter `.`.

## Add a real affiliate product
Open `products.js`. Each product looks like this:
```js
{
  id: 16,
  name: "Example Product",
  category: "Audio",
  icon: "♫",
  description: "A short, accurate description.",
  features: ["Feature one", "Feature two", "Feature three"],
  bestFor: "Everyday use",
  price: "Check retailer",
  affiliateUrl: "https://your-approved-affiliate-link.example",
  demo: false
}
```
Replace the example URL with your actual affiliate URL issued by the relevant programme. Set `demo: false` only after verifying the product and link. Do not copy prices or product images unless the programme permits it. This starter version intentionally uses no retailer API and does not import products automatically.

## Before promoting the site
- Add your real business email on `contact.html`.
- Review and customize `privacy.html` for the services and data collection you actually use.
- Verify every product, link, price, disclosure, and affiliate programme requirement.
- Keep affiliate disclosures clear and visible.
- The starter catalogue is illustrative. The site is not a checkout store and does not process orders or payments.

## Preview locally
Double-click `index.html` to preview in a browser. Some browser features are limited locally, but search/filter works without a server.
