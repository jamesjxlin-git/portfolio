# James Lin — personal site

A static site (no build step). Open `index.html` in a browser to preview.

## Edit content
Everything you see is generated from **`content.js`**: intro text, stats, education, roles,
client work, projects, and contact links. Edit the text there and refresh.

- **Photo:** replace `assets/portrait.jpg` (portrait orientation, ~1200px tall is plenty).
  Adjust the crop with `portraitPosition` in `content.js` (e.g. `"50% 22%"`).
  Tip: open the site with `#edit` at the end of the URL to try photos and crop positions live
  in your browser; the panel shows the `portraitPosition` value to copy into `content.js`.
- **Logos:** put the image in `assets/logos/`, then in `content.js` find the matching entry and set
  its `logo` to the file path, spelled exactly like the file name, for example:
  `logo: "assets/logos/NYU-Logo.png",`
  If a logo looks small because the image has a lot of white space around it, add `logoScale: 1.3,`
  (bigger number = bigger logo). Set `logo: null` to show initials instead (Mercer currently has no logo file).
- **Slides:** the mock-up slides on each role page are drawn in `slides.js`. All names and numbers
  on them are illustrative.

## Deep links
`#about`, `#education`, `#experience`, `#client-work`, `#projects`, `#contact`,
role pages `#dedham`, `#ey`, `#mercer`, `#rerx`, and the full client list `#clients`.

## Publish for free
- **GitHub Pages:** create a repo named `jamesjxlin-git.github.io`, upload these files to the root,
  and the site goes live at `https://jamesjxlin-git.github.io`.
- **Vercel / Netlify:** drag this folder onto their dashboard. Both support custom domains.
