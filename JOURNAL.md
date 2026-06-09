# CS 463/563 Final Project Journal

**Student:** Emmanuel Arthur  
**Project:** Personal portfolio website (`emmarthur.github.io`)

---

## Project links (required)

|                       | URL                                              |
| --------------------- | ------------------------------------------------ |
| **Deployed site**     | https://emmarthur.github.io/                     |
| **GitHub repository** | https://github.com/emmarthur/emmarthur.github.io |
| **Video presentation**| https://media.pdx.edu/media/t/1_cy2ey4w4         |

---

## 1. Project overview

I built a one-page professional portfolio site that meets the final project requirements: navbar, About (with photo), Previous Work, Projects (2–3 outside-course projects), and a Contact form. The site uses **HTML5**, **CSS**, **Bootstrap 5.3.3**, **JavaScript (ES6+)**, and **jQuery**.

The page is a single `index.html` file with section ids (`#home`, `#about`, `#previous-work`, `#projects`, `#contact`) so the navbar jumps to each area. I rebuilt the site in small steps with **8 meaningful commits** (the assignment requires at least 6).

**Beyond-class components (additional requirement):**

- **Bootstrap accordion** in Previous Work (`#workAccordion`)
- **Bootstrap carousel** in Projects (`#projectCarousel`)

These were not covered in the lab notebook; I learned them from the Bootstrap documentation.

---

## 2. How to reproduce this project

VS Code and Git are **not** required to run the site. It is static HTML; any modern browser is enough.

### View online (no setup)

Open **https://emmarthur.github.io/** in Chrome, Edge, Firefox, or Safari.

### Run from local files (no clone required)

With a local copy of the project folder (download, copy, or unzip):

1. Open the `emmarthur.github.io/` folder in File Explorer (Windows) or Finder (Mac).
2. Double-click **`index.html`**, or right-click → **Open with** → a modern browser.

Bootstrap and jQuery load from CDN links in the HTML, so connect to the internet for full styling and the carousel, accordion, and form validation. Do not move `index.html` out of the folder — `css/`, `js/`, and `images/` must stay in place.

### Optional: clone from GitHub

```bash
git clone https://github.com/emmarthur/emmarthur.github.io.git
cd emmarthur.github.io
```

Then open `index.html` as above. Cloning is only needed for repo history or pushing changes.

### Optional: VS Code + Live Server

For development only: open the folder in VS Code and use the Live Server extension. **Not required** to view or test the site.

**File structure:**

```
emmarthur.github.io/
  index.html              # One-page site (all sections)
  css/styles.css            # Custom theme and polish
  js/main.js                # Form validation, navbar active state
  js/jquery-interactions.js # jQuery section highlight
  images/                   # Profile photo + project images
  README.md                 # Run instructions and library list
```

---

## 3. Work log by commit

Each session below maps to a git commit. Messages match the repository history.

### Commit 1 — `Initial commit: empty starter files for personal website repo`

**What I did:** Created the repo and folder layout: `index.html`, empty `css/styles.css`, empty `js/main.js`, empty `js/jquery-interactions.js`, and `images/`.

**Why:** Starting with structure before content makes later steps easier and matches how we organized homework in class.

---

### Commit 2 — `Link stylesheets and add navbar`

**What I did:**

- Added HTML5 skeleton: doctype, `lang="en"`, charset, viewport meta, meta description, title.
- Linked Bootstrap 5.3.3 CSS (CDN) and `css/styles.css`.
- Built the navbar inside `<header>` with links to all five sections.
- Added Bootstrap navbar toggler for mobile (`data-bs-toggle`, `data-bs-target`).

**Design decision:** I moved `sticky-top` from `<nav>` to `<header>` so the whole top block stays fixed when scrolling (documented in `DESIGN-CHANGES.md`).

**Issues:** The hamburger menu did not open until Bootstrap JavaScript was added in a later commit.

---

### Commit 3 — `Add About and Previous Work sections`

**What I did:**

- Added `<main id="main-content">` and a Home hero section (`#home`).
- Added About section with Bootstrap grid: photo (`images/1683647827149.jpg`) and bio text.
- Added Previous Work section with a **Bootstrap accordion** (`#workAccordion`) — three panels (two BlackRock roles + education).

**Beyond class — accordion:** Each panel uses `accordion-button`, `data-bs-toggle="collapse"`, and `data-bs-parent="#workAccordion"` so only one panel stays open at a time. I read the [Bootstrap Accordion docs](https://getbootstrap.com/docs/5.3/components/accordion/) to learn the markup.

---

### Commits 4 & 5 — `Add Projects section and carousel`

**What I did:**

- Added Projects section heading and intro.
- Built a **Bootstrap carousel** (`#projectCarousel`) with three slides, indicator dots, and prev/next controls.
- Added three project cards in a responsive grid (`#project-cards`).

**Projects (all outside this course):**

1. Retail Impact Simulator
2. StainCheck Mobile App
3. Web Security Exploitation Suite

Each card includes title, description, and GitHub link.

**Beyond class — carousel:** Structure follows [Bootstrap Carousel docs](https://getbootstrap.com/docs/5.3/components/carousel/): `carousel-inner`, `carousel-item active`, `carousel-indicators`, and `data-bs-ride="carousel"`. Slideshow behavior required Bootstrap JS (added later).

**Note:** I have two commits with the same message here; the second added the contact section and script tags before a later commit split out `main.js`.

---

### Commit 6 — `Add contact form validation in main.js`

**What I did:**

- Added Contact section with a labeled form (name, email, radio fieldset, message).
- Wrote `js/main.js` with custom validation (not browser default):
  - Name: at least 2 characters
  - Email: regex pattern check
  - Message: at least 10 characters
- On failure: Bootstrap `is-invalid` class and text in `invalid-feedback` divs.
- On success: thank-you message in `#form-feedback`.
- Added navbar active-state updates when section hash changes.

**Why `novalidate` on the form:** So my JavaScript controls error messages instead of the browser’s built-in popups.

---

### Commit 7 — `Add custom CSS, footer, jQuery, README, and project images`

**What I did:**

- Filled in `css/styles.css`: teal theme, hero gradient, carousel caption overlay, form card styling, focus outlines.
- Added site footer with copyright.
- Added jQuery 3.7.1 (CDN) and `jquery-interactions.js` — brief orange outline on section when a nav link is clicked.
- Wrote `README.md` with run instructions, libraries, and deploy URL.
- Replaced placeholder picsum images with local Unsplash photos in `images/`.

---

### Commit 8 — Documentation commits

**What I did:** Added `BUILD-STEPS.md`, `DESIGN-CHANGES.md`, and `VIDEO-PRESENTATION-OUTLINE.md` for my own build guide and video prep (not required for the live site, but useful for the journal and presentation).

---

### Commit 9 — `Fix WAVE contrast and redundant link issues in navbar`

**What I did:** Ran the [WAVE](https://wave.webaim.org/) extension and fixed first-round accessibility findings (see Section 5).

**Follow-up (same session, may be a later commit):** Fixed hero contrast by adding a `.hero-panel` with solid background `#003838` behind text on the gradient, per WAVE’s rule that text over gradients needs a defined background color.

---

## 4. Beyond-class feature for the video: Bootstrap carousel

The assignment requires at least one Bootstrap element **not covered in the lab notebook**. I used two (accordion + carousel). For the **video presentation**, I explain the **carousel** line by line — it has HTML structure, custom CSS, and relies on Bootstrap’s JavaScript bundle (no custom slide logic in `main.js`).

**Also on the site (mention briefly in video):** Bootstrap accordion in Previous Work (`#workAccordion`).

### Bootstrap carousel (Projects) — video deep-dive

**Location:** `#projects` → `#projectCarousel`

**Files to show:**

| File                  | What to explain                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `index.html`          | `#projectCarousel` wrapper, indicators, three `carousel-item` slides, prev/next controls, `data-bs-*` attributes |
| `css/styles.css`      | Max width, image crop (`object-fit`), caption overlay background                                                 |
| `index.html` (bottom) | `bootstrap.bundle.min.js` — wires slide behavior from HTML attributes                                            |

**How it works:** Three `carousel-item` slides with project images and captions. Indicator dots and prev/next arrows use `data-bs-target="#projectCarousel"`. Bootstrap JS handles slide changes; I added CSS so captions stay readable over photos. The same three projects also appear as Bootstrap cards below for detail and GitHub links.

**How I tested:** After adding Bootstrap JS, I clicked arrows and dots and confirmed each slide appears. On mobile, captions hide (`d-none d-md-block`) so small screens show images only.

### Bootstrap accordion (Previous Work) — brief mention only

**Location:** `#previous-work` → `#workAccordion`

One-line in video: accordion collapses job/education panels; learned from Bootstrap docs; not the line-by-line focus.

---

## 5. Issues encountered and how I fixed them

| Issue                              | Cause                                                                   | Fix                                                                                                                                       |
| ---------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Navbar links low contrast (WAVE)   | Bootstrap `navbar-dark` uses 55% opacity white on custom teal `#006060` | Set Bootstrap navbar CSS variables and link colors to `#ffffff` in `styles.css`                                                           |
| Redundant Home links (WAVE)        | Brand and “Home” nav both linked to `#home`                             | Removed “Home” nav item; brand name is the home link with `aria-current="page"`                                                           |
| Hero text low contrast (WAVE)      | White text on CSS gradient without solid text background                | Added `.hero-panel` with `background-color: #003838` on wrapper and text elements; **2 contrast errors still reported on final WAVE run** |
| Redundant About links (WAVE)       | Hero “Learn more” and nav “About” both went to `#about`                 | Changed hero CTA to a `<button>` that scrolls via `main.js`                                                                               |
| Duplicate GitHub URLs (WAVE alert) | All three cards linked to same profile URL                              | Gave each project a distinct repo path on GitHub                                                                                          |
| Accordion/carousel not working     | Bootstrap CSS only; no JS                                               | Added `bootstrap.bundle.min.js` before `main.js`                                                                                          |
| Sticky nav overlap                 | Section headings hidden under navbar                                    | `scroll-margin-top` on `section[id]` and `sticky-top` on `<header>`                                                                       |

Full WAVE notes are in `WAVE-AUDIT-FIXES.md` in the repo.

---

## 6. Accessibility audit results (WAVE)

I used the [WAVE](https://wave.webaim.org/) browser extension on the deployed site (https://emmarthur.github.io/) and on local Live Server. WAVE is required for the final project accessibility check.

### First audit (before fixes)

| WAVE finding            | Count |
| ----------------------- | ----- |
| Contrast errors         | 6     |
| Alerts (redundant link) | 2     |
| Errors                  | 0     |

**Contrast errors (6) — navbar:** Inactive nav links failed WCAG contrast against the custom teal background (`#006060`). Bootstrap’s `navbar-dark` uses semi-transparent white (`rgba(255, 255, 255, 0.55)`), which does not meet 4.5:1 on our teal.

**Alerts (2) — redundant Home links:** The navbar brand (`Emmanuel Arthur`) and a separate “Home” nav item both linked to `#home`.

### Fixes applied

| Issue                    | Fix                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| Navbar contrast (6)      | Set Bootstrap navbar CSS variables and link colors to full white (`#ffffff`) in `css/styles.css`       |
| Redundant Home links (2) | Removed the “Home” nav item; brand name is the home link with `aria-current="page"` when on `#home`    |
| Hero contrast (2)        | Wrapped hero text in `.hero-panel` with solid background `#003838` on the panel, `h1`, and `.lead`     |
| Redundant About links    | Changed hero “Learn more about me” from `<a href="#about">` to a `<button>` that scrolls via `main.js` |
| Duplicate GitHub URLs    | Gave each project card a distinct repo path instead of the same profile URL                            |

### Final audit (after fixes)

| WAVE finding            | Count |
| ----------------------- | ----- |
| Contrast errors         | **2** |
| Alerts (redundant link) | 0     |
| Errors                  | 0     |

After pushing the navbar, hero panel, and redundant-link fixes, WAVE still reported **2 contrast errors** on the hero section — the `<h1>` and `.lead` paragraph over the gradient background. I added a solid `#003838` background on `.hero-panel` and the text elements per WAVE’s guidance for text on gradients, but the checker still flagged those two elements on the final run. Redundant-link alerts were cleared (0).

**What I learned:** Custom theme colors need to be re-checked when overriding Bootstrap defaults. WAVE’s gradient rule is strict — even with a solid panel behind the text, the hero area can still fail depending on how the checker reads layered backgrounds.

### Other accessibility practices

- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, form labels with `for` attributes, fieldset/legend for radio group.
- **ARIA:** `aria-label` on nav and carousel, `aria-labelledby` on sections, `aria-current` on active nav/brand, `aria-live="polite"` on form feedback.
- **Keyboard / focus:** Visible focus outlines in custom CSS; navbar and form controls are keyboard reachable.
- **Formatting:** Ran Prettier on HTML, CSS, and JavaScript before commits.

---

## 7. Deployment

1. Created public repo `emmarthur.github.io` on GitHub.
2. Pushed `main` branch after each meaningful commit.
3. Enabled GitHub Pages: **Settings → Pages → Source: main, folder / (root)**.
4. Live site: https://emmarthur.github.io/

---

## 8. Outside sources and libraries

| Resource                                                                                 | How I used it                                                                 |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Bootstrap 5.3 Docs](https://getbootstrap.com/docs/5.3/)                                 | Navbar, grid, accordion, carousel, form classes                               |
| [Bootstrap Accordion component](https://getbootstrap.com/docs/5.3/components/accordion/) | Previous Work section                                                         |
| [Bootstrap Carousel component](https://getbootstrap.com/docs/5.3/components/carousel/)   | Projects slideshow                                                            |
| [jQuery 3.7.1](https://jquery.com/)                                                      | CDN + `$(document).ready`, `.on()`, `.addClass()` in `jquery-interactions.js` |
| [jsDelivr CDN](https://www.jsdelivr.com/)                                                | Bootstrap CSS/JS hosting                                                      |
| [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)                       | Automated accessibility audit                                                 |
| [Unsplash](https://unsplash.com/) (Unsplash License)                                     | Project images — retail checkout, coffee spill, circuit board                 |
| CS 463/563 lab notebook                                                                  | HTML forms, Bootstrap basics, accessibility unit patterns                     |
| Prettier                                                                                 | Code formatting                                                               |

No premade themes or copied portfolio templates were used. Bio and job content are my own.

---

## 9. What breaks if parts are removed

The portfolio is a single page with linked assets. Removing a piece changes what loads or what still responds to clicks.

| Removed piece | Effect on the live page |
| ------------- | ------------------------ |
| `css/styles.css` | Teal theme, hero panel, carousel caption styling, navbar WAVE contrast fixes, and focus outlines disappear. |
| `js/main.js` | Custom contact validation, success alert, navbar active state, and hero scroll-to-About stop working. |
| `js/jquery-interactions.js` | Orange section highlight on nav clicks stops. |
| `bootstrap.bundle.min.js` | Accordion, carousel, and mobile menu clicks do nothing. |
| `#projectCarousel` | Beyond-class carousel is gone; project cards may remain below. |
| Accordion in Previous Work | Long static job history instead of collapsible panels. |
| WAVE fixes documented in Section 6 | Contrast and redundant-link findings return; see `WAVE-AUDIT-FIXES.md`. |
| `images/` files | Broken images in About and Projects. |

Detailed notes per build step: `BUILD-STEPS.md`. Carousel-specific impact: `CAROUSEL-DEEP-DIVE.md`.

---

## 10. Video presentation note

A separate **10–12 minute video** walks through these commits and demos the live site. The recording is hosted on PSU Media Space:

**https://media.pdx.edu/media/t/1_cy2ey4w4**

Outline and talking points: `VIDEO-PRESENTATION-OUTLINE.md`. The video goes into more detail on commits where this journal is shorter.
