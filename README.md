# emmarthur.github.io

Professional one-page portfolio for CS 463/563 Web Development. Built with HTML, CSS, Bootstrap, JavaScript, and jQuery.

## Project links

|                       | URL                                              |
| --------------------- | ------------------------------------------------ |
| **Deployed site**     | https://emmarthur.github.io/                     |
| **GitHub repository** | https://github.com/emmarthur/emmarthur.github.io |

## How to run

No build step, npm install, or VS Code is required. This is a static site: open `index.html` in any modern browser.

### Option 1 — View online (simplest)

Open the deployed site in a browser:

**https://emmarthur.github.io/**

No download, clone, or setup needed.

### Option 2 — Run from a local folder (no Git, no VS Code)

If you already have the project files (USB, email, Canvas download, copied folder, etc.):

1. Open the project folder on your computer (`emmarthur.github.io/`).
2. Double-click **`index.html`**, or right-click it → **Open with** → Chrome, Edge, Firefox, or Safari.

The page loads Bootstrap and jQuery from the internet (CDN), so you need an **internet connection** for full styling and interactivity. Keep the folder structure intact — `css/`, `js/`, and `images/` must stay next to `index.html`.

### Option 3 — Clone from GitHub (optional)

```bash
git clone https://github.com/emmarthur/emmarthur.github.io.git
cd emmarthur.github.io
```

Then use Option 2: open `index.html` in a browser. Cloning is only needed if you want version history or to push changes.

### Option 4 — VS Code + Live Server (optional, for development)

If you use VS Code, install the **Live Server** extension and open `index.html` with **Open with Live Server**. This auto-refreshes when you edit files. It is **not** required to view or grade the site.

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

This site is hosted on **GitHub Pages** from the public repo `emmarthur/emmarthur.github.io`.

**Live URL:** https://emmarthur.github.io/

### First-time setup (already configured)

1. Create a **public** repository named `<username>.github.io` (for this project: `emmarthur.github.io`).
2. Push project files to the **`main`** branch.
3. On GitHub: open the repo → **Settings** → **Pages** (under “Code and automation”).
4. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
5. Set **Branch** to **`main`**, folder **`/ (root)`**, then click **Save**.
6. After one to two minutes, the site is live at `https://<username>.github.io/` (here: https://emmarthur.github.io/).

### Updating the live site

1. Edit files locally and commit: `git add .` → `git commit -m "your message"`.
2. Push to GitHub: `git push origin main`.
3. GitHub Pages rebuilds automatically — refresh the live URL to see changes.

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
- Custom contact form validation in `main.js`
- jQuery section highlight on navbar clicks in `jquery-interactions.js`

## Accessibility and quality checks

- Run [WAVE](https://wave.webaim.org/) on the deployed site before submitting.
- Run Prettier on HTML, CSS, and JavaScript files.
