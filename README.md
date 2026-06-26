# William-Zuo-Personal-Website

Minimalist academic website scaffolded with Next.js (App Router), React, and Tailwind CSS.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Files of interest

- `app/` — Next.js App Router pages and layout
- `components/` — modular React components (NavBar, ProjectCard, WritingItem)
- `data/` — placeholder project and writing metadata

Add your project repository links in `data/projects.js` and place PDF files for essays in the `public/` folder, then update `data/writings.js` links accordingly.

GitHub Pages deploy

- The workflow builds the site and publishes the generated `out/` directory to the `gh-pages` branch.
- Once the action completes, enable Pages in repo settings and use `https://black-bird5.github.io/William-Zuo-Personal-Website`.
