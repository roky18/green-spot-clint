# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Community Cleanliness & Issue Reporting Portal

Live Site:

## 🔍 Project Overview

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application where users can report, track and manage cleanliness & public-space related issues in their local area. The portal allows users to request clean-up drives, make small community-contributions, and view their personal history of reported issues.

## 🛠 Tech Stack

- **Frontend:** React.js, React Router, Tailwind CSS, daisyUI, React Icons
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Auth
- **Hosting:** Client – Firebase Hosting; Server – Vercel
- **Others:**
  [
  "@tailwindcss/vite": "^4.1.17",
  "axios": "^1.13.2",
  "firebase": "^12.5.0",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-fast-marquee": "^1.6.5",
  "react-icons": "^5.5.0",
  "react-router": "^7.9.5",
  "sweetalert2": "^11.26.3",
  "tailwindcss": "^4.1.17"
  ]

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
