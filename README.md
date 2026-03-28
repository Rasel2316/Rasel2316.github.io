# Rasel Mondal — Academic Portfolio

[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml)

A polished, dark-themed academic portfolio site built with pure **HTML · CSS · JS** — no frameworks, no build tools. Deploys automatically to GitHub Pages via GitHub Actions.

**Live demo:** `https://YOUR_USERNAME.github.io/YOUR_REPO`

---

## Features

- ⚡ Zero-dependency — pure HTML/CSS/JS, instant load
- 🎨 Dark refined aesthetic with Playfair Display + IBM Plex Mono typography
- ✨ Animated neural-network hero canvas (WebGL-free)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔍 Publication filter (All / Published / In Progress)
- 🔄 Scroll-reveal animations via IntersectionObserver
- 🚀 Auto-deploy to GitHub Pages via GitHub Actions

---

## Repository Structure

```
rasel-academic-site/
├── index.html                    # Main site
├── assets/
│   ├── css/
│   │   └── style.css             # All styles (CSS variables, responsive)
│   └── js/
│       └── main.js               # Canvas, filters, scroll animations
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Pages auto-deploy
└── README.md
```

---

## Deploy to GitHub Pages (3 steps)

### 1. Create a new GitHub repository

Go to [github.com/new](https://github.com/new) and create a repo (e.g. `academic-site`).

### 2. Push this code

```bash
git init
git add .
git commit -m "Initial commit: academic portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/academic-site.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to **Settings → Pages** in your repository
2. Under **Source**, select **GitHub Actions**
3. The workflow will run automatically — your site will be live at:

```
https://YOUR_USERNAME.github.io/academic-site
```

---

## Customization

### Update your links
In `index.html`, replace placeholder `href` values:

```html
<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" ...>

<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>
```

### Add a profile photo
Add an `<img>` tag in the about section inside `index.html`:

```html
<div class="about-photo">
  <img src="assets/img/photo.jpg" alt="Rasel Mondal" />
</div>
```

And place your photo at `assets/img/photo.jpg`.

### Update publication links
Add `href` attributes to `<h3 class="pub-title">` elements to link to paper PDFs or DOIs:

```html
<h3 class="pub-title">
  <a href="https://doi.org/..." target="_blank">Paper Title</a>
</h3>
```

### Colors & fonts
All design tokens are CSS variables at the top of `assets/css/style.css`:

```css
:root {
  --gold:    #c3a364;   /* accent color */
  --bg:      #0a0b0f;   /* background */
  --text:    #e8e4da;   /* body text */
  ...
}
```

---

## Local Development

No build step needed — just open `index.html` in a browser, or use any static server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## License

MIT — free to use and adapt for your own academic portfolio.

---

*Built for Rasel Mondal, PhD Scholar, Data Science & Engineering, IISER Bhopal.*
