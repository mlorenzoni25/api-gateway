# node-ts-boilerplate 🚀

A minimal, opinionated starter kit for building backend apps with Node.js and TypeScript.

## 🔧 Tech Stack

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) with flat config
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint-staged](https://github.com/okonet/lint-staged)

## ▶️ Getting Started

```bash
git clone https://github.com/mlorenzoni25/node-ts-boilerplate.git
cd node-ts-boilerplate
npm install
npm run dev
```

## ✅ Available Scripts

- `npm run dev` – Start dev server with `tsx` and `.env`
- `npm run prod` – Start dev server with `.env.production`
- `npm run build` – Compile TypeScript using `tsconfig.production.json`
- `npm run start` – Run production build using Node with `.env.production`
- `npm run clean` – Remove the `dist` folder
- `npm run lint` – Lint and auto-fix using ESLint
- `npm run format:check` – Check formatting with Prettier
- `npm run format:fix` – Fix formatting with Prettier
- `npm run lint-staged` – Run lint-staged manually
- `npm run prepare` – Setup Husky

## 💼 Git Hooks

Git hooks are configured using Husky and lint-staged to ensure code quality before each commit:

- Format & lint staged files
- Validate commit messages

## 📄 License

MIT License

---

Created by Michele Lorenzoni ([https://github.com/mlorenzoni25](https://github.com/mlorenzoni25)) - Feel free to reach out with any questions!
