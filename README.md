# Guild Conveyancing

Premium React + Vite website for Guild Conveyancing, covering Victoria, South Australia and Queensland.

## Upload to GitHub

Upload the project source files to GitHub, but do not upload `node_modules`, `.pnpm-store` or `dist`. They are ignored by `.gitignore`.

Recommended GitHub contents:

- `src/`
- `public/`
- `index.html`
- `package.json`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `netlify.toml`
- `.gitignore`
- `README.md`

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The client logo is expected at `src/assets/logo-rosegold.webp`. A small local placeholder is included so the site can run before the final brand asset is supplied.

## Netlify Deploy

Connect the GitHub repository to Netlify and use:

- Build command: `pnpm run build`
- Publish directory: `dist`

The included `netlify.toml` already sets these values and includes the redirect needed for React Router pages.
