# WAVE Audit Fixes

Documentation of issues found with the [WAVE](https://wave.webaim.org/) browser extension and how they were resolved.

**Audit date:** June 2026  
**Page tested:** `index.html` (local Live Server)

---

## Summary

| WAVE finding            | Count before | Count after fix |
| ----------------------- | ------------ | --------------- |
| Contrast errors         | 6            | 0 (expected)    |
| Alerts (redundant link) | 2            | 0 (expected)    |
| Errors                  | 0            | 0               |

Re-run WAVE after pulling these changes to confirm.

---

## 3. Contrast errors (2) — Hero section text on gradient

### What WAVE reported

Two **contrast errors** on the home/hero section: the `<h1>` and/or `.lead` intro paragraph (`"Software engineer and MS Computer Science student..."`).

### Cause

WAVE treats text on a **CSS gradient** like text on a background image. Its docs state that text over gradients must have a **solid `background-color` defined** on the text (or its wrapper)—not just `color: white` on a transparent background. Darkening the gradient alone does not satisfy WAVE’s checker.

### Fix

1. Wrapped hero content in a `.hero-panel` div.
2. Set solid background `#003838` on the panel **and** on `h1` / `.lead` (white `#ffffff` on `#003838` exceeds 4.5:1).

```css
#home .hero-panel {
  background-color: #003838;
  color: #ffffff;
  ...
}

#home .hero-panel h1,
#home .hero-panel .lead {
  background-color: #003838;
  color: #ffffff;
}
```

### Files changed

- `index.html` — added `.hero-panel` wrapper
- `css/styles.css`

---

## 4. Alerts (2) — Redundant link to About

### What WAVE reported

Two **redundant link** alerts for links both targeting `#about`.

### Cause

The hero **"Learn more about me"** button (`<a href="#about">`) duplicated the navbar **About** link to the same section.

### Fix

Changed the hero CTA from an anchor to a **button** that scrolls to `#about` via JavaScript (no duplicate link):

```html
<button type="button" class="btn btn-light btn-lg" id="hero-about-btn">
  Learn more about me
</button>
```

Scroll logic added in `js/main.js`.

**Update:** Three project cards also linked to the same `https://github.com/emmarthur` URL, causing additional redundant-link alerts. Each card now uses a distinct repo path.

### Files changed

- `index.html`
- `js/main.js`

---

## 1. Contrast errors (6) — Very low contrast

### What WAVE reported

Six **contrast errors** on the navigation bar. Inactive nav links (About, Previous Work, Projects, Contact, etc.) failed WCAG contrast against the custom teal navbar background (`#006060`).

### Cause

Bootstrap’s `navbar-dark` uses semi-transparent white for nav links (`rgba(255, 255, 255, 0.55)`). That default is tuned for Bootstrap’s dark gray navbar, not our custom teal. At 55% opacity, the link text did not meet the minimum **4.5:1** contrast ratio against `#006060`.

### Fix

In `css/styles.css`, set Bootstrap navbar CSS variables and explicit link colors to **full white** (`#ffffff`):

```css
.navbar.bg-dark {
  background-color: var(--teal) !important;
  --bs-navbar-color: #ffffff;
  --bs-navbar-hover-color: #ffffff;
  --bs-navbar-active-color: #ffffff;
  --bs-navbar-brand-color: #ffffff;
  --bs-navbar-brand-hover-color: #ffffff;
}

.navbar-dark .navbar-brand,
.navbar-dark .navbar-nav .nav-link {
  color: #ffffff;
}
```

### Files changed

- `css/styles.css`

---

## 2. Alerts (2) — Redundant link

### What WAVE reported

Two **redundant link** alerts: two links in the header both pointed to the same destination (`#home`).

### Cause

Both of these were in the navbar:

1. **Navbar brand:** `<a class="navbar-brand" href="#home">Emmanuel Arthur</a>`
2. **Home nav item:** `<a class="nav-link" href="#home">Home</a>`

Screen reader users would hear two links to the same place in the same navigation region.

### Fix

1. **Removed the separate “Home” nav link** — the site name (navbar brand) is the home link, which is a common pattern.
2. **Moved `aria-current="page"` to the brand** when the user is on the home section.
3. **Updated `js/main.js`** so `updateNavHighlight()` sets active state and `aria-current` on the brand when the hash is `#home`.

### Files changed

- `index.html` — removed Home `<li>`, added `aria-current="page"` on brand
- `js/main.js` — brand highlight logic

---

## How to verify

1. Open `index.html` in the browser (or https://emmarthur.github.io/).
2. Run the WAVE extension again.
3. Confirm **0 errors** and **0 contrast errors**.
4. Confirm redundant link alerts are gone.
5. Tab through the navbar — all links should be clearly visible white on teal.
6. Click **Emmanuel Arthur** in the nav — should jump to home; brand should show as current page.

---

## Notes for journal / video

- Mention that WAVE is required for the final project accessibility check (5 points).
- Contrast fix: custom theme colors must be re-checked when overriding Bootstrap defaults.
- Redundant link fix: avoid duplicate links to the same URL in the same navigation block.
