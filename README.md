# Simple Academic GitHub Page

A very small static academic website for GitHub Pages.

## Files

- `index.html` — all visible page sections
- `style.css` — design
- `script.js` — publication data + search/filter logic
- `assets/profile.jpg` — put your profile photo here
- `cv.pdf` — put your CV in the repository root

## Edit the site

### Profile image
Add your image as:

`assets/profile.jpg`

### About / Research / Academic text
Edit the relevant text directly in `index.html`.

### Publications
Open `script.js` and edit the `publications` array.

Example:

```js
{
  year: 2026,
  type: "Journal",
  title: "Your paper title",
  authors: "Your Name, Coauthor Name",
  venue: "Journal Name",
  keywords: ["Explainable AI", "Data Mining"],
  links: {
    paper: "https://...",
    code: "https://..."
  }
}
```

The website automatically creates:
- text search
- year filter
- type filter
- clickable keyword filters
- visible keywords under every paper
- reverse chronological grouping

## Publish with GitHub Pages

1. Create a repository named `YOURUSERNAME.github.io`.
2. Upload these files to the root of the repository.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.

No Jekyll, Ruby, BibTeX, Liquid, or theme overrides are required.
