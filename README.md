# vial-web (Keychron Edition)

Fork of [vial-web](https://github.com/vial-kb/vial-web) with Keychron keyboard support.

## Features

- **Keychron Settings**: Debounce, NKRO, Report Rate, Wireless Low Power Mode
- **Snap Click (SOCD)**: Key pair configuration for gaming
- **Keychron RGB**: Per-Key RGB, Mixed RGB modes, OS indicators
- **Analog Matrix**: Hall Effect keyboard support (Q5 HE, etc.)

## Live Demo

Visit [vial.tymon3310.dev](https://vial.tymon3310.dev) to use this fork.

## Building

```bash
git clone https://github.com/Tymon3310/vial-web.git
cd vial-web
git clone --branch vial-keychron https://github.com/tymon3310/vial-gui.git
git clone https://github.com/vial-kb/via-keymap-precompiled.git
./fetch-emsdk.sh
./fetch-deps.sh
./build-deps.sh
cd src
./build.sh
```

The output will be in `src/build/` - a static site ready to deploy.

## Deployment

The built files can be hosted on any static site hosting service:
- GitHub Pages (automatic via workflow)
- Cloudflare Pages
- Vercel
- Netlify

## Credits

- [vial-kb/vial-web](https://github.com/vial-kb/vial-web) - Original project
- [vial-kb/vial-gui](https://github.com/vial-kb/vial-gui) - Vial GUI
