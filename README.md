# emmarthur.github.io

Professional one-page portfolio for CS 463/563 Web Development. I built it with HTML, CSS, Bootstrap, JavaScript, and jQuery.

## Project links

|                       | URL                                              |
| --------------------- | ------------------------------------------------ |
| **Deployed site**     | https://emmarthur.github.io/                     |
| **GitHub repository** | https://github.com/emmarthur/emmarthur.github.io |

## How to run

No build step, npm install, or VS Code is required. This is a static site: open `index.html` in any modern browser.

### Option 1: View online (simplest)

Open the deployed site in a browser:

**https://emmarthur.github.io/**

No download, clone, or setup needed.

### Option 2: Run from a local folder (no Git, no VS Code)

With a local copy of the project files (USB, email, Canvas download, copied folder, etc.):

1. Open the project folder (`emmarthur.github.io/`).
2. Double-click **`index.html`**, or right-click it → **Open with** → Chrome, Edge, Firefox, or Safari.

Bootstrap and jQuery load from CDN links in the HTML. An **internet connection** is required for full styling and interactivity. Keep the folder structure intact: `css/`, `js/`, and `images/` must stay next to `index.html`.

### Option 3: Clone from GitHub (optional)

```bash
git clone https://github.com/emmarthur/emmarthur.github.io.git
cd emmarthur.github.io
```

Then open `index.html` in a browser (Option 2). Cloning is optional for version history or pushing changes.

### Option 4: VS Code + Live Server (optional, for development)

VS Code with the **Live Server** extension can open `index.html` with auto-refresh while editing. Not required to view or grade the site.

### Requirements

| Needed                              | Not needed                    |
| ----------------------------------- | ----------------------------- |
| Modern web browser                  | VS Code or Live Server        |
| Internet (for Bootstrap/jQuery CDN) | npm, Node.js, or a build step |
| Project folder with `index.html`    | Git (unless cloning)          |

## Project structure

```
emmarthur.github.io/
  index.html              # One-page site (all sections)
  css/styles.css          # Custom theme and layout
  js/main.js              # Form validation, navbar active state
  js/jquery-interactions.js
  images/                 # Profile photo and project images
  README.md
```

## Deployment (GitHub Pages)

I host this site on **GitHub Pages** from the public repo `emmarthur/emmarthur.github.io`.

**Live URL:** https://emmarthur.github.io/

### First-time setup (already configured)

1. Create a **public** repository named `<username>.github.io` (this project: `emmarthur.github.io`).
2. Push project files to the **`main`** branch.
3. On GitHub: open the repo → **Settings** → **Pages**.
4. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
5. Set **Branch** to **`main`**, folder **`/ (root)`**, then click **Save**.
6. After one to two minutes, the site is live at `https://<username>.github.io/` (here: https://emmarthur.github.io/).

### Updating the live site

1. Edit files locally and commit: `git add .` → `git commit -m "message"`.
2. Push to GitHub: `git push origin main`.
3. GitHub Pages rebuilds automatically; refresh the live URL to see changes.

There is no separate build or deploy command; GitHub serves `index.html` and static assets from the repo root.

## Outside libraries and resources

- [Bootstrap 5.3.3](https://getbootstrap.com/) (CSS and JS via [jsDelivr](https://www.jsdelivr.com/) CDN)
- [jQuery 3.7.1](https://jquery.com/) (CDN)
- [Bootstrap Carousel docs](https://getbootstrap.com/docs/5.3/components/carousel/) — beyond-class component in Projects
- [Bootstrap Accordion docs](https://getbootstrap.com/docs/5.3/components/accordion/) — beyond-class component in Previous Work
- Project images from [Unsplash](https://unsplash.com/) (Unsplash License):
  - Retail: [checkout photo](https://unsplash.com/photos/0cfed4f6a45d)
  - StainCheck: [coffee spill](https://unsplash.com/photos/QQNQjrKEl6w)
  - Web Security: [circuit board](https://unsplash.com/photos/4bd374c3f58b)

## Features

- One-page layout: Navbar, About, Previous Work, Projects, Contact
- Bootstrap accordion (Previous Work) and carousel (Projects) — beyond lab notebook
- Carousel deep-dive write-up: `CAROUSEL-DEEP-DIVE.md`
- Custom contact form validation in `main.js`
- jQuery section highlight on navbar clicks in `jquery-interactions.js`

## What breaks if parts are removed

The site is one HTML file plus linked assets. Removing a piece changes what visitors see or what still works.

| Removed piece | Effect on the live page |
| ------------- | ------------------------ |
| `index.html` | Nothing loads; the site does not exist |
| `css/styles.css` | Bootstrap defaults only: teal theme, hero panel, carousel caption contrast, navbar WAVE fixes, and focus outlines disappear |
| `js/main.js` | Contact form uses browser validation or reloads; navbar active state and hero scroll-to-About stop working |
| `js/jquery-interactions.js` | Section highlight flash on nav clicks stops; rest of the site still works |
| `bootstrap.bundle.min.js` (CDN) | Mobile menu, accordion, and carousel arrows/dots do nothing |
| Bootstrap or jQuery CSS/JS CDN | Unstyled layout; interactive components fail |
| `images/` files | Broken image icons in About and Projects |
| `#projectCarousel` block | Beyond-class carousel gone; project cards below may still show |
| Accordion markup | Previous Work becomes one long text block |
| Navbar or section `id`s | In-page links and scroll targets break |
| `.hero-panel` or related CSS | Hero text may fail WAVE contrast checks on the gradient |
| Footer | Copyright block missing; sections above still work |

Step-by-step impact notes: `BUILD-STEPS.md` (each step includes an **If removed** paragraph and an overview table).

## Accessibility and quality checks

- [WAVE](https://wave.webaim.org/) audit on the deployed site
- Prettier on HTML, CSS, and JavaScript files
