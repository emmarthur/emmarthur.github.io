# Video Presentation Outline

**Course:** CS 463/563 — Final Project  
**Site:** emmarthur.github.io personal portfolio  
**Length:** 10–12 minutes (**hard max: 12 minutes**)

Use this outline while recording. The instructions require you to **describe your code contributions** and **walk through your commits**. Show code in your editor or GitHub; demo the live site where it helps.

**Beyond-class focus for this video:** **Bootstrap carousel** (`#projectCarousel`) — every line is commented in `index.html`, `css/styles.css`, and the Bootstrap JS script tag at the bottom of `index.html`.

---

## Before you record

- [ ] Repo is public: `https://github.com/emmarthur/emmarthur.github.io`
- [ ] Site is deployed (GitHub Pages URL ready to paste/show)
- [ ] Git log open (`git log --oneline --reverse`)
- [ ] `index.html` scrolled to `#projectCarousel` comments, `css/styles.css` carousel block, Bootstrap script tag
- [ ] Browser open to the deployed site (desktop + narrow window for mobile)
- [ ] WAVE extension ready on https://emmarthur.github.io/

**Opening line (say both URLs):**

> “This is Emmanuel Arthur’s final project—a one-page portfolio site. Repo: https://github.com/emmarthur/emmarthur.github.io. Live site: https://emmarthur.github.io/.”

---

## Time budget

| Section                             | Minutes    | Purpose                                   |
| ----------------------------------- | ---------- | ----------------------------------------- |
| 1. Intro + project overview         | ~1:00      | Context and requirements met              |
| 2. Commit walkthrough               | ~6:00      | **Main requirement** — code contributions |
| 3. Beyond-class deep dive: carousel | ~2:30      | Line-by-line `#projectCarousel`           |
| 4. Live demo + WAVE accessibility   | ~1:30      | Demo + explain remaining contrast errors  |
| 5. Wrap-up                          | ~0:30      | Sources, what you’d improve               |
| **Total**                           | **~12:00** | Stay at or under 12 minutes               |

---

## Section 1 — Intro (~1 minute)

**Say:**

1. **What the site is** — One-page professional portfolio (navbar, About, Previous Work, Projects, Contact).
2. **Tech stack** — HTML5, CSS, JavaScript, Bootstrap 5.3.3 (CDN). No React/other frameworks.
3. **Structure** — Single `index.html`, `css/styles.css`, `js/main.js`, `images/`.
4. **How many commits** — At least 6 meaningful commits with descriptive messages.
5. **Beyond class** — Accordion (Previous Work) + **carousel (Projects)**; carousel is what I’ll explain in detail.

**Show:** Deployed homepage briefly (full viewport).

---

## Section 2 — Commit walkthrough (~6 minutes)

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
- Bootstrap CSS CDN + link to `css/styles.css`
- `<header class="sticky-top">` with Bootstrap navbar
- One-page nav: `#home`, `#about`, `#previous-work`, `#projects`, `#contact`
- Navbar toggler for mobile (`data-bs-toggle`, `data-bs-target`)

**Show:** `<head>` links and navbar block in `index.html`. Mention `DESIGN-CHANGES.md` if you moved `sticky-top` to `<header>`.

---

### Commit 3 — `Add About and Previous Work sections`

**Talk about:**

- `<main id="main-content">`
- **Home** hero section (`#home`)
- **About** — photo, bio, Bootstrap grid
- **Previous Work** — accordion (beyond class; brief mention only here)

**Show:** About section markup. One-line: “Accordion in Previous Work — I’ll focus on the carousel later.”

---

### Commits 4 & 5 — `Add Projects section and carousel`

_(Two commits with same message—treat as one logical chunk.)_

**Talk about:**

- Projects section header + intro (2–3 outside-course projects)
- **Carousel added here** — structure only in first commit, slides in second
- Project cards below carousel

**Show:** Jump to commented `#projectCarousel` block — “I’ll walk through every line in Section 3.”

---

### Commit 6 — `Add contact form validation in main.js`

**Talk about:**

- Contact form with `novalidate`, `invalid-feedback` divs
- **`js/main.js`** — validation, success message, navbar active state
- Bootstrap JS bundle at bottom — needed for carousel (and accordion, navbar collapse)

**Show:** `handleContactSubmit` in `main.js`. Submit empty form in browser.

---

### Later commits (brief)

- Custom CSS, footer, jQuery, README, images
- WAVE fixes: navbar contrast, redundant links, hero panel

**Show:** Git log only — don’t re-read every diff.

---

## Section 3 — Beyond-class deep dive: Bootstrap carousel (~2.5 minutes)

**Say first:**

> “The assignment asks for Bootstrap elements we didn’t cover in the lab notebook. I also used an accordion, but I’m going to explain the **carousel** line by line — the HTML, my custom CSS, and how Bootstrap’s JavaScript makes it work without any custom slide code in `main.js`.”

**Walk through in order:**

### 1. HTML — `#projectCarousel` in `index.html`

| Part                                 | What to say                                                                              |
| ------------------------------------ | ---------------------------------------------------------------------------------------- |
| Outer `<div id="projectCarousel">`   | Unique id; `carousel slide` classes; `data-bs-ride="carousel"` initializes when JS loads |
| `carousel-indicators`                | Three dot buttons; `data-bs-slide-to="0"` etc. jump to slides                            |
| `carousel-inner`                     | Container for slides; only one visible at a time                                         |
| First `carousel-item active`         | `active` = starting slide; image + caption                                               |
| Other `carousel-item`                | Hidden until user navigates                                                              |
| `carousel-caption d-none d-md-block` | Text overlay; hidden on phones                                                           |
| `carousel-control-prev` / `-next`    | Arrows; `data-bs-slide="prev"` / `"next"`                                                |
| ARIA                                 | `aria-label` on carousel and dots; `visually-hidden` on arrow text                       |

**Show:** Scroll through commented carousel block. Click through live site while naming each part.

### 2. CSS — `#projectCarousel` in `css/styles.css`

| Rule                                       | What to say                                         |
| ------------------------------------------ | --------------------------------------------------- |
| `max-width: 900px` + auto margins          | Centers carousel, keeps it from stretching too wide |
| `.carousel-item img` + `object-fit: cover` | Consistent height, crops without distortion         |
| `.carousel-caption` dark background        | Readability over photos                             |

**Show:** Split editor + browser; resize to show caption hiding on mobile.

### 3. JavaScript — Bootstrap bundle (not `main.js`)

**Say:**

> “There’s no carousel code in `main.js`. Bootstrap’s bundle reads the `data-bs-target`, `data-bs-slide-to`, and `data-bs-slide` attributes on my HTML and wires up the slideshow.”

**Show:** Commented `<script>` tag for `bootstrap.bundle.min.js` at bottom of `index.html`.

**One-liner on accordion:** “Previous Work uses the same Bootstrap JS pattern with `data-bs-toggle="collapse"` — same idea, different component.”

---

## Section 4 — Live demo + WAVE accessibility (~1.5 minutes)

### Quick demo

| Action                          | What it proves                    |
| ------------------------------- | --------------------------------- |
| Projects → carousel arrows/dots | Bootstrap JS + your HTML          |
| Narrow browser                  | Captions hide; images still slide |
| Contact → Submit empty          | Custom validation in `main.js`    |
| Tab through navbar              | Focus outlines in CSS             |

### WAVE audit — explain remaining 2 contrast errors

**Run WAVE on https://emmarthur.github.io/ and show the panel.**

**Say (adapt naturally):**

> “For accessibility I ran WAVE on the deployed site. My first pass had **six contrast errors** in the navbar and **two redundant-link alerts** — duplicate Home links.
>
> I fixed those: navbar links are full white on teal, removed the extra Home nav item, changed the hero CTA to a button, and gave each project a distinct GitHub URL. After that: **zero alerts, zero errors**, but **two contrast errors remain** on the hero — the heading and intro paragraph.
>
> WAVE treats text on a **CSS gradient** strictly. I added a `.hero-panel` with solid background `#003838` behind the text, which passes in a manual contrast checker — white on that dark teal is readable. WAVE still flags those two elements, likely because the parent section keeps the gradient.
>
> So I went from eight findings down to two, applied the fix WAVE documents for gradient text, and I’m transparent about what’s left rather than hiding it.”

**Optional show:** `css/styles.css` `.hero-panel` rules; [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) with `#FFFFFF` on `#003838`.

---

## Section 5 — Wrap-up (~30 seconds)

**Say:**

1. **Outside sources** — [Bootstrap Carousel docs](https://getbootstrap.com/docs/5.3/components/carousel/), Bootstrap 5.3 CDN, Unsplash images, WAVE.
2. **Beyond class** — Carousel deep-dive; accordion also on site.
3. **If I had more time** — Flat hero background to clear last WAVE contrast flags.

**Closing:**

> “That covers my commits, the carousel beyond-class feature, and my WAVE audit. Journal PDF and links are in Canvas. Thanks.”

---

## Checklist vs. grading (mention if time)

| Requirement          | Where on your site               |
| -------------------- | -------------------------------- |
| Navbar               | `<header>` + `.navbar`           |
| About + photo        | `#about`                         |
| Previous Work        | `#previous-work` + accordion     |
| 2–3 outside projects | `#projects` cards + **carousel** |
| Contact form         | `#contact` + `#contact-form`     |
| CSS file             | `css/styles.css`                 |
| JS interactivity     | `js/main.js`                     |
| Beyond class (video) | **`#projectCarousel`**           |
| 6+ commits           | Git log                          |
| Deploy + README      | GitHub Pages + `README.md`       |

---

## What NOT to spend time on

- Reading every line of the accordion aloud
- Long biography content
- jQuery (one line if time: section highlight on nav click)
- Apologizing for the 2 WAVE contrast errors — explain them confidently

---

## Journal vs. video

| Journal (PDF)                | Video                              |
| ---------------------------- | ---------------------------------- |
| Session-by-session build log | Commit walkthrough + carousel dive |
| WAVE before/after tables     | Show WAVE panel + explain 2 left   |
| Accordion + carousel listed  | **Carousel** line-by-line only     |
| All outside source links     | Say main sources aloud             |

---

## Suggested recording setup

1. Screen: IDE on carousel comments + browser on Projects section.
2. Mic: quiet room; speak slowly—you have 12 minutes max.
3. Practice once with a timer; shorten Commit 1 and later doc commits if you run long.
