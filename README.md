# Nilay Kumar, portfolio

React + TypeScript + Tailwind CSS (v3) + Vite. All copy lives in `src/data/content.ts`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Verify
```bash
npm run verify     # typecheck, lint, production build, render + a11y + link checks, contrast ratios
```

## Deploy
`npm run build` outputs a static site to `dist/`. Any static host works.
- **Vercel / Netlify / Cloudflare Pages:** import the repo, build command `npm run build`, output `dist`.
- **GitHub Pages:** publish `dist/`. `public/404.html` is copied automatically.
- Set `VITE_SITE_URL` (see `.env.example`) to your final origin so the social preview image uses an absolute URL.

## Updating content
- Projects, skills, timeline, education: `src/data/content.ts`
- Resume: replace `public/Nilay_Kumar_Resume.pdf`
- Add repo/demo/paper links per project via the `links` array (empty arrays render no buttons)
