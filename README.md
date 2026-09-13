# GTA7

HTML5 game, gebouwd met [Phaser 3](https://phaser.io) en [Vite](https://vitejs.dev).

## Lokaal ontwikkelen

```bash
npm install
npm run dev
```

Opent op http://localhost:5173

## Productie build

```bash
npm run build
npm run preview   # test de build lokaal
```

De build komt in `dist/`.

## Deploy naar GitHub Pages

Deploy gebeurt automatisch via GitHub Actions (`.github/workflows/deploy.yml`)
bij elke push naar `main`. Zie de repo-instellingen hieronder voor de
eenmalige configuratie die nodig is.
