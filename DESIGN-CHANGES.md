# Design Changes: emmarthur.github.io

A log of visual and layout tweaks made after the initial build steps. Each entry notes what changed, where, and why.

---

## 2026-05-29 — Sticky navigation on `<header>` instead of `<nav>`

**File:** `index.html` (Step 4 — navbar)

**Before:**

```html
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" ...>
```

**After:**

```html
<header class="sticky-top">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ...>
```

**What changed:** The Bootstrap `sticky-top` class was moved from the inner `<nav>` to the outer `<header>`.

**Why:** Pinning the header wrapper keeps the entire top navigation area fixed while scrolling. Putting `sticky-top` only on the navbar can behave inconsistently depending on how the header and nav are nested; applying it to `<header>` makes the sticky region match the semantic “top of page” block.

**Related docs:** Updated in `BUILD-STEPS.md` (Step 4).

---

## What breaks if design changes are reverted

| Reverted change | Effect on the page |
| --------------- | ------------------ |
| `sticky-top` moved back onto `<nav>` only | The navbar may scroll away with the page on some viewports, or sticky behavior may be inconsistent because only the inner nav is pinned, not the full `<header>` wrapper. |
| `sticky-top` removed entirely | The entire navigation bar scrolls off screen; visitors must scroll back to the top to change sections. |
| Custom teal navbar colors removed | Bootstrap default dark gray or low-contrast link colors return; WAVE navbar contrast errors may reappear (see `WAVE-AUDIT-FIXES.md`). |
| Carousel `max-width` / caption background removed | Slideshow stretches edge-to-edge on wide monitors; caption text may be unreadable on light areas of photos. |
| Hero `.hero-panel` removed | Hero text sits on the gradient without a solid backing; WAVE contrast errors on `h1` and `.lead` are more likely. |
