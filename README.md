# Jaikumar Gaja — Developer Portfolio

A responsive personal portfolio for an aspiring Cloud / DevOps Engineer. It highlights a verified public DevOps repository, professional background, current learning focus, and proposed next projects with clear status labels.

## Stack

- React, TypeScript, and Vite
- Tailwind CSS v4 via its Vite plugin, with a custom responsive design system
- Motion for React and Lucide React

## Features

- Single-page portfolio with profile, skills, projects, experience, principles, and contact sections
- Central site content in `src/config/site.ts`
- Mobile navigation, keyboard Escape support, visible focus states, and a skip link
- Reduced-motion support and viewport-triggered reveals
- Responsive layouts designed for narrow phones through desktop screens
- SEO metadata, Open Graph basics, favicon, and `robots.txt`
- No backend, contact form, analytics, or external project assets

## Run locally

Requires a current Node.js LTS or newer release and npm.

```bash
npm install
npm run dev
```

Vite prints the local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The static production site is generated in `dist/`.

## Deploy to Vercel

1. Create a GitHub repository named `portfolio-website-project` and push this project.
2. In Vercel, import that GitHub repository.
3. Keep the detected Vite defaults: build command `npm run build`, output directory `dist`, and no framework-specific environment variables.
4. Deploy. Vercel will build future pushes automatically.

No deployment has been performed by this project setup.

## Update content

Edit `src/config/site.ts` to change the name, headline, email, social links, résumé path, skills, experience, education, principles, and project details. The configured email is `gajajaikumar1@gmail.com`; change it there if needed. Project links only render when a repository URL is configured. Add a real résumé at `public/resume/` before setting `resumePath` to it.

The DevOps project entry is based on the public repository at [JaikumarGaja/devops-portfolio-project](https://github.com/JaikumarGaja/devops-portfolio-project). Its README describes a learning project and distinguishes repository configuration from currently running infrastructure. Update the portfolio claims only when the repository or verified implementation changes.

## Repository setup

This folder was created outside an existing Git checkout. Initialize it with `git init` when you are ready to publish; no remote or GitHub credentials are assumed here.
