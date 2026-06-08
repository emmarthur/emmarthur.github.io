# emmarthur.github.io

Professional one-page portfolio for CS 463/563 Web Development. Built with HTML, CSS, Bootstrap, JavaScript, and jQuery.

## How to run

1. Clone this repository.
2. Open `index.html` in a browser, or use the Live Server extension in VS Code.
3. No build step or npm install is required.

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
