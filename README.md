# Portfolio Template

A single-page portfolio template for software engineers. Responsive layout with a hero section, work experience timeline, blog links, technical expertise grid, and project cards. Customize name, bio, links, and content in `index.html`.

## Quick start

Open `index.html` in a browser or serve the folder with any static server. No build step required.

## What’s included

- **Hero** — Name, title, short bio, photo placeholder, CTA buttons (contact, resume).
- **Work experience** — Vertical timeline with company, role, duration, and bullet points.
- **Blogs** — List of blog posts with titles, excerpts, and links to `blog/` pages.
- **Technical expertise** — Grid of skills (e.g. Backend, Frontend, Databases, DevOps, Testing, Cloud).
- **Projects** — Card grid for projects and blog previews with optional GitHub links.
- **Resume** — Optional LaTeX resume in `PKG_Resume_Template/`; main page links to a PDF (replace with your own).

Replace placeholder text, profile image (`assets/images/people/dp.png`), and social/contact links with your own. Update meta tags and Open Graph in `<head>` for sharing.

## Preview (section by section)

Screenshots below follow the page from top to bottom.

**1. Hero — name, title, bio, and CTAs**

![Hero section](assets/images/home/image1.png)

**2. Work experience timeline**

![Work experience](assets/images/home/image2.png)

**3. Blogs section**

![Blogs](assets/images/home/image3.png)

**4. Technical expertise grid**

![Technical expertise](assets/images/home/image4.png)

**5. Projects section**

![Projects](assets/images/home/image5.png)

## Structure

```
portfolio-template/
├── index.html          # Main page
├── index.js            # Animations (e.g. GSAP)
├── blog/               # Sample blog posts
├── css/                # Styles (Tailwind, custom)
├── assets/
│   └── images/
│       ├── home/       # Screenshots for README
│       └── people/     # Profile photo (dp.png)
└── PKG_Resume_Template/  # Optional LaTeX resume
```

## Tech

- Plain HTML, CSS (Tailwind-style utility classes), minimal JS.
- GSAP + ScrollTrigger for scroll-based animations.
- Bootstrap Icons for icons.
