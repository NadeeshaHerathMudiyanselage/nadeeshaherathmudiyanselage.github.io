# Nadeesha Complete Academic Website

A simple static GitHub Pages academic website. No Jekyll, Ruby, Liquid, or build pipeline is required.

## Pages included

- Home
- Publications
- Experience
- Education
- Awards
- Teaching
- Skills
- Talks
- Blog
- Contact
- CV link

The Blog includes an index plus three example post pages.

## Upload

Upload ALL files and folders directly to the root of:
`NadeeshaHerathMudiyanselage/nadeeshaherathmudiyanselage.github.io`

GitHub Pages:
Settings → Pages → Deploy from a branch → main → /(root)

## Profile photo

Place your profile photo at:
`assets/profile.jpg`

## CV

Place your CV at:
`cv.pdf`

## Edit publications

Edit the `publications` array in:
`publications.js`

## Edit blog

Edit the `posts` array in:
`blog.js`

Individual blog post HTML files are inside:
`blog/`

Copy one of those files whenever you want to create a new post.

## Edit unknown details

Teaching and Talks intentionally contain placeholders because exact course/talk information was not available.
Replace those entries with your actual records before publishing.


## Scopus profile

The Scopus icon is already displayed on the home page. Replace the `href="#"` value in `index.html` with your public Scopus profile URL when available.


## Latest layout changes

- Frameless scrollable News section on the home page
- Guaranteed-visible profile icons in a vertical list
- Narrower Publications and Experience pages
- Scrollable publication keywords
- Publication type shown in a left column
- Optional `status` field in `publications.js`; if set to `Under Review`, it appears above the paper title
- PDF action with a PDF icon
- Publication counts per year
- Career Summary on Experience
- Redesigned Education timeline
- Awards sorted by year, plus Certifications and Memberships
- Expanded Skills page
- Blog category filter, newest/oldest sorting, and clickable Popular Tags

## CV page

The navigation now opens `cv.html`, a document-style academic CV page with numbered sections.
If you also upload a PDF named `cv.pdf`, the **Download PDF** button on the CV page will open it.


## Teaching course pop-up

The Teaching page now uses course tiles. Clicking **Introduction to Artificial Intelligence** opens an on-page modal with the course overview, learning objectives, topics, and assessment.

## Contact page

The static contact form was removed. The Contact page now provides direct contact information and a simple **Email me** link instead.
