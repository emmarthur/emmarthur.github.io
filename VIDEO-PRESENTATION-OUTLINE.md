# Video Presentation Outline

**Course:** CS 463/563 — Final Project  
**Site:** emmarthur.github.io personal portfolio  
**Length:** 10–12 minutes (**hard max: 12 minutes**)

Use this outline while recording. The instructions require you to **describe your code contributions** and **walk through your commits**. Show code in your editor or GitHub; demo the live site where it helps.

---

## Before you record

- [ ] Repo is public: `https://github.com/emmarthur/emmarthur.github.io`
- [ ] Site is deployed (GitHub Pages URL ready to paste/show)
- [ ] Git log open (`git log --oneline --reverse`)
- [ ] `index.html`, `js/main.js`, and `css/styles.css` open in editor
- [ ] Browser open to the deployed site (desktop + narrow window for mobile)

**Opening line (say both URLs):**

> “This is Emmanuel Arthur’s final project—a one-page portfolio site. Repo: [GitHub URL]. Live site: [deployed URL].”

---

## Time budget

| Section                              | Minutes    | Purpose                                   |
| ------------------------------------ | ---------- | ----------------------------------------- |
| 1. Intro + project overview          | ~1:00      | Context and requirements met              |
| 2. Commit walkthrough                | ~7:00      | **Main requirement** — code contributions |
| 3. Beyond-class features (deep dive) | ~2:00      | Accordion + carousel                      |
| 4. Live demo + accessibility/JS      | ~1:30      | Show it working                           |
| 5. Wrap-up                           | ~0:30      | Sources, what you’d improve               |
| **Total**                            | **~12:00** | Stay at or under 12 minutes               |

---

## Section 1 — Intro (~1 minute)

**Say:**

1. **What the site is** — One-page professional portfolio (navbar, About, Previous Work, Projects, Contact).
2. **Tech stack** — HTML5, CSS, JavaScript, Bootstrap 5.3.3 (CDN). No React/other frameworks.
3. **Structure** — Single `index.html`, `css/styles.css`, `js/main.js`, `images/`.
4. **How many commits** — At least 6 meaningful commits with descriptive messages.

**Show:** Deployed homepage briefly (full viewport).

---

## Section 2 — Commit walkthrough (~7 minutes)

Go through commits **in order**. For each: **what changed → why → 1 file or snippet to show**.

### Commit 1 — `Initial commit: empty starter files for personal website repo`

**Talk about:**

- Project skeleton: folder layout (`css/`, `js/`, `images/`)
- Empty `index.html`, `styles.css`, `main.js` placeholders
- Why start with structure before content

**Show:** Repo file tree or first commit diff.

---

### Commit 2 — `Link stylesheets and add navbar`

**Talk about:**

- HTML5 doctype, `lang`, charset, viewport meta
- Meta description (SEO)
- **Skip link** — first element in `<body>`; jumps to `#main-content` (Accessibility unit — from class, not “beyond class”)
- Bootstrap CSS CDN + link to `css/styles.css`
- `<header class="sticky-top">` with Bootstrap navbar
- One-page nav: `#home`, `#about`, `#previous-work`, `#projects`, `#contact`
- Navbar toggler for mobile (`data-bs-toggle`, `data-bs-target`)

**Show:** `<head>` links and navbar block in `index.html`. Mention `DESIGN-CHANGES.md` if you moved `sticky-top` to `<header>`.

---

### Commit 3 — `Add About and Previous Work sections`

**Talk about:**

- `<main id="main-content">` — skip link target
- **Home** hero section (`#home`)
- **About** — photo (`images/1683647827149.jpg`), bio, Bootstrap grid (`row` / `col-md-4` / `col-md-8`)
- **Previous Work** — `#previous-work` section

**Show:** About section markup; accordion opening tag.

---

### Commits 4 & 5 — `Add Projects section and carousel`

_(You have two commits with this message—briefly note both or treat as one logical chunk.)_

**Talk about:**

- Projects section header + intro (2–3 outside-course projects, not homework)
- **Project cards** — Bootstrap cards with title, description, GitHub link
- Three projects: Retail Impact Simulator, StainCheck, Web Security Suite

**Show:** One project card and section heading.

---

### Commit 6 — `Add contact form validation in main.js`

**Talk about:**

- Contact section: labeled form (name, email, radio fieldset, message)
- `novalidate` on form — browser validation off so **your** JS runs
- `invalid-feedback` divs for custom errors
- **`js/main.js`** — `validateContactForm()`, email regex, `is-invalid` classes
- Submit handler: `preventDefault()`, success message in `#form-feedback`
- Bonus: navbar `active` state on hash change
- Bootstrap JS bundle at bottom — powers accordion, carousel, navbar collapse

**Show:** `handleContactSubmit` and validation rules in `main.js`. Submit empty form in browser to show errors.

---

## Section 3 — Beyond-class features (~2 minutes)

**Instructions ask for elements not covered in the lab notebook. Your two main examples:**

### Bootstrap accordion (Previous Work)

**Say:**

- Not in lab notebook; learned from Bootstrap docs
- `#workAccordion` with three panels (two jobs + education)
- `data-bs-parent="#workAccordion"` — only one panel open at a time
- `accordion-button`, `collapse show` vs `collapsed`

**Show:** Previous Work section in code (`<!-- BEYOND CLASS: Bootstrap accordion -->`). Expand/collapse live.

### Bootstrap carousel (Projects)

**Say:**

- Also not in lab notebook
- `#projectCarousel` — indicators, `carousel-inner`, prev/next controls
- Three slides matching the three project cards
- Requires Bootstrap JS (Step 12)

**Show:** Carousel HTML comment and live slide change.

**Optional one-liner:** Skip link = class accessibility work; custom form validation = general JS requirement (not the same as accordion/carousel).

---

## Section 4 — Live demo (~1.5 minutes)

Quick pass on the **deployed site** (don’t re-read code):

| Action                  | What it proves                  |
| ----------------------- | ------------------------------- |
| Tab once                | Skip link appears / focus moves |
| Click each nav link     | One-page scroll to sections     |
| Narrow browser          | Hamburger menu works            |
| Previous Work           | Accordion opens/closes          |
| Projects                | Carousel arrows/dots work       |
| Contact → Submit empty  | Custom validation errors        |
| Contact → Valid submit  | Green success alert             |
| Resize desktop ↔ mobile | Responsive layout               |

---

## Section 5 — Wrap-up (~30 seconds)

**Say:**

1. **Outside sources** — Bootstrap 5.3 docs (CDN CSS + JS), picsum.photos placeholders, any tutorials (list in README when done).
2. **Checks you care about** — Semantic HTML, labels on form fields, alt text on images, formatted code (Prettier).
3. **Still to do** (if not finished) — Custom CSS in `styles.css` (skip-link styling), README, final deploy polish, journal PDF.

**Closing:**

> “That covers my code contributions and commits for this project. Journal and links are in Canvas. Thanks.”

---

## Checklist vs. grading (mention if time)

| Requirement          | Where on your site           |
| -------------------- | ---------------------------- |
| Navbar               | `<header>` + `.navbar`       |
| About + photo        | `#about`                     |
| Previous Work        | `#previous-work` + accordion |
| 2–3 outside projects | `#projects` cards + carousel |
| Contact form         | `#contact` + `#contact-form` |
| CSS file             | `css/styles.css`             |
| JS interactivity     | `js/main.js` (30+ lines)     |
| Beyond class         | Accordion + carousel         |
| 6+ commits           | Git log                      |
| Deploy + README      | GitHub Pages + `README.md`   |

---

## What NOT to spend time on

- Reading every line of HTML aloud
- Long biography content (summarize sections exist)
- Apologizing for placeholder GitHub links or picsum images (note you’ll swap for real URLs)
- jQuery (only mention if you add `jquery-interactions.js` in Step 15)

---

## Journal vs. video

| Journal (PDF)                | Video                       |
| ---------------------------- | --------------------------- |
| Session-by-session build log | Commit-focused walkthrough  |
| Issues and fixes in detail   | Show code + quick demo      |
| All outside source links     | Say main sources aloud      |
| Reproducible steps           | **Show** repo and live site |

Use the video to go **deeper on commits** that are thin in the journal.

---

## Suggested recording setup

1. Screen: split GitHub commits + browser, or switch between IDE and site.
2. Mic: quiet room; speak slowly—you have 12 minutes max.
3. Practice once with a timer; cut Section 2 if you run long (shorten Commits 1 and 4/5 duplicate).
