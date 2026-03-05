# Abhiraj Vishwakarma — Portfolio

A sleek, dark-themed portfolio for a backend-focused full stack developer. Built with React, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Host on GitHub Pages

1. **Push your code** to GitHub (repo: `Abhiraj0406/portfolio`).

2. **Turn on GitHub Pages**
   - Open the repo on GitHub → **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, choose **GitHub Actions**.

3. **Optional – contact form**
   - In the repo: **Settings** → **Secrets and variables** → **Actions**.
   - Add a secret: name `VITE_FORMSPREE_ID`, value = your Formspree form ID (from [formspree.io](https://formspree.io)).
   - This lets the deployed site use the contact form.

4. **Deploy**
   - Every push to `main` runs the workflow and deploys the site.
   - Live URL: **https://abhiraj0406.github.io/portfolio/**

## Stack

- **React** + **Vite**
- **Tailwind CSS** (v4)
- **Framer Motion** (scroll and entrance animations)

## Resume download

Add **Abhiraj_Vishwakarma_Resume.pdf** to the `public/` folder so the Hero "Download Resume" button works. The link uses `download` and works on desktop and mobile.

## Sections

- Hero (title, Download Resume, View Projects, Contact, GitHub & LinkedIn)
- Tech Stack (Python/FastAPI, PostgreSQL, Docker, Keycloak, Laravel, React)
- Experience (Encardio-Rite, Freelance / Jain Pandit)
- Featured Projects (ExploreHub, Sensor Calibration Software)
- Education (B.Tech CSE, AKTU, 2024)
- Contact (email + form)
