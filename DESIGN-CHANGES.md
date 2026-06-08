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
