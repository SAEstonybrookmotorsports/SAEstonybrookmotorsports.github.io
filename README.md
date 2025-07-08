Here’s a detailed **Markdown file** documenting the key features and functionality of your **Stony Brook Motorsports website**, based on the code you provided:

---

# Stony Brook Motorsports Website Documentation

## Overview

This website represents the official online presence of the **Stony Brook Motorsports Team**, showcasing the team's history, sponsors, and contact information. Built with **Astro**, it includes a dynamic landing animation, a structured layout system, responsive design, and sponsor integrations.

---

## Features

### 1. Intro Animation (Landing Only)

* Component: `LogoAnimation.astro`
* Displays a **custom animated intro** when the page is first loaded in a session.
* Fades into the main content after **4 seconds**.
* Controlled by `sessionStorage` to **play only once per session**.

### 2. Hero Section

* Text overlay: “A Racing Team with History”.
* Visually impactful hero image background.
* Uses flex and center alignment to focus attention.

### 3. Sponsor Showcase

* Responsive **grid layout** of sponsor logos.
* Each logo is:

  * A clickable `<a>` link that opens in a new tab.
  * Labeled with its respective company name in the `alt` tag for accessibility.
* Fade-in effect on page load using the `fade-to-white` class.

### 4. Contact Section

* Email and Instagram info included.
* Instagram link opens in a new tab.

---

## JavaScript Interactivity

### Animation Handling (`DOMContentLoaded`)

* Prevents scrolling during intro animation.
* Re-enables scrolling once the animation completes.
* Ensures the animation doesn't play again in the same browser session.

### Sponsor Fade-In (`window.load`)

* Adds `.fade-to-white` class to `.sponsor-logos` container after full load.
* Use this for smooth visual transitions (optional CSS required for the effect).

---

## Code Structure

### Layouts

* `BaseLayout.astro`: Wraps all pages and provides shared structure (e.g. navbar, footer).

### Components

* `LogoAnimation.astro`: Responsible for playing the team’s animated intro.

---

## File Locations

| Type      | File                                      |
| --------- | ----------------------------------------- |
| Page      | `/src/pages/index.astro`                  |
| Layout    | `/src/layouts/BaseLayout.astro`           |
| Animation | `/src/components/LogoAnimation.astro`     |
| Styles    | `/src/styles/global.css`, `/pastcars.css` |
| Images    | `/public/images/sponsors/...`             |

---

## Image & Optimization Notes

* Sponsors use various formats: `.png`, `.svg`, `.webp`, `.avif`, `.gif`.
* Best practice: Convert heavier `.png` or `.gif` files to `.webp` or `.avif` manually for performance.
* Keep images inside `public/` unless using Astro's `<Image />` component (which requires importing from `/src`).

---

## Accessibility

* Each image includes `alt` text for screen reader support.
* External links use `rel="noopener noreferrer"` for security.

---

## Future Improvements

*  Add support for lazy-loading sponsor images.
*  Add better description / mission statement.
*  Improve Gallery Laout and update team section.
*  Move images to `/src/assets` for automatic WebP optimization with `<Image />`.

---

## 📬 Contact Info

* **Email**: `stonybrookbmotorsports@gmail.com`
* **Instagram**: [@stonybrookmotorsports](https://instagram.com/stonybrookmotorsports)

---
