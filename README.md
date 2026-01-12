# com.personal.website

## Personal Website — VSCode‑Inspired Portfolio


This project is my personal website, designed to showcase my projects, experience, and professional style.

The interface replicates the aesthetics of Visual Studio Code, with panels, tabs, and an interactive experience reminiscent of a real IDE.


## Tech stack

- React (with funtionaly components and hooks)

- Vite (Ultra-fast bundler)

- Tailwind

- Own Email Api (PHP Backend with PHPMailer + Gmail Api)

- GitHub actions for CI/CD

- Hosting Namecheap

## Key features

- Design inspired by VSCode

- Tab-based navigation mimicking editor files

- Smooth animations and minimalist UI

- Projects section with GitHub links

- Contact form connected to a custom backend

- Fully responsive

- Optimized build with Vite

## Requeriments

- Node.js >= 18

- NPM

## Facility

```bash

git clone https://github.com/FlavioKde/com.personal.website.git
cd com.personal.website
npm install

```

## Development mode

```bash

npm run dev

```

The app will be available

```bash

http://localhost:5173


```

## Production build

```bash

npm run build

```

This creates the folder

```bash

/dist

```

which is the one that gets uploaded to the hosting


## Deploy

Deployment is performed using GitHub Actions via FTP:

The frontend is automatically uploaded to **public_html/

**The backend/ folder is excluded to prevent overwriting.

## Project structure

```bash

src/
│
├── components/
├── pages/
├── assets/
├── hooks/
├── styles/
└── main.jsx

```

## Contact

The site's form sends messages through its own backend:

PHP 8.1+

PHPMailer + Gmail API

Autoload via Composer

## License

Personal project. All content is for personal use.


