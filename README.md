# emmarthur.github.io

Professional one-page portfolio for CS 463/563 Web Development. Built with HTML, CSS, Bootstrap, JavaScript, and jQuery.

## How to run

No build step, npm install, or VS Code is required. This is a static site: open `index.html` in any modern browser.

### Option 1 — View online (simplest)

Open the deployed site in a browser:

**https://emmarthur.github.io/**

No download or setup needed.

### Option 2 — Run from a local folder (no Git, no VS Code)

If you already have the project files (USB, email, Canvas download, copied folder, etc.):

1. Open the project folder on your computer (`emmarthur.github.io/`).
2. Double-click **`index.html`**, or right-click it → **Open with** → Chrome, Edge, Firefox, or Safari.

The page loads Bootstrap and jQuery from the internet (CDN), so you need an internet connection for full styling and interactivity. Keep the folder structure intact — `css/`, `js/`, and `images/` must stay next to `index.html`.

### Option 3 — Clone from GitHub (optional)

```bash
git clone https://github.com/emmarthur/emmarthur.github.io.git
cd emmarthur.github.io
```

Then use Option 2: open `index.html` in a browser. Cloning is only needed if you want version history or to push changes.

### Option 4 — VS Code + Live Server (optional, for development)

If you use VS Code, install the **Live Server** extension and open `index.html` with **Open with Live Server**. This auto-refreshes when you edit files. It is **not** required to view or grade the site.

## Project structure

```
emmarthur.github.io/
  index.html
  css/styles.css
  js/main.js
  js/jquery-interactions.js
  images/
  README.md
```

## Deployed site

**Live URL:** https://emmarthur.github.io/

To deploy or update GitHub Pages:

1. Push commits to the `main` branch.
2. On GitHub: **Settings → Pages → Source** → branch **main**, folder **/ (root)** → Save.

## Outside libraries and resources

- [Bootstrap 5.3.3](https://getbootstrap.com/) (CSS and JS via jsDelivr CDN)
- [jQuery 3.7.1](https://jquery.com/) (CDN)
- Project images from [Unsplash](https://unsplash.com/) (Unsplash License):
  - Retail: [checkout photo](https://unsplash.com/photos/0cfed4f6a45d)
  - StainCheck: [coffee spill](https://unsplash.com/photos/QQNQjrKEl6w)
  - Web Security: [circuit board](https://unsplash.com/photos/4bd374c3f58b)

## Features

- One-page layout: Navbar, About, Previous Work, Projects, Contact
- Bootstrap accordion (Previous Work) and carousel (Projects)
- Custom contact form validation in `main.js`
- jQuery section highlight on navbar clicks in `jquery-interactions.js`

## Before submitting

- Run [WAVE](https://wave.webaim.org/) on the deployed site.
- Run Prettier on HTML, CSS, and JavaScript files.
