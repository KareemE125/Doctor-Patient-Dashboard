# Doctor Patient Dashboard
Doctor Patient Dashboard App by ReactJS, Typescript, Zustand and tailwindCSS

## Screenshot
*Light Mode*
![ss](https://github.com/KareemE125/Doctor-Patient-Dashboard/assets/61433385/231d51e5-29ee-4d08-a4d6-fad5026006cd)

*Dark Mode*
![ss-dark](https://github.com/KareemE125/Doctor-Patient-Dashboard/assets/61433385/68a345a0-a297-408e-9a1d-23b88da7cb99)



## Adobe XD 
Link: https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/specs/


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
