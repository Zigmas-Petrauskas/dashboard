import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // ignoruojame build/dist aplankus
  globalIgnores(["dist", "node_modules"]),

  {
    files: ["**/*.{js,jsx}"], // visiems JS/JSX failams
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      prettier: prettierPlugin, // integruojame Prettier
    },
    extends: [
      js.configs.recommended, // ESLint recommended rules
      reactHooks.configs.flat.recommended, // React hooks taisyklės
      reactRefresh.configs.vite, // React Refresh + Vite
    ],
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z_]" }], // ignoruoti _ ir didžiasias
      "prettier/prettier": "error", // rodo Prettier klaidas per ESLint
    },
    settings: {
      react: {
        version: "detect", // automatiškai nustato React versiją
      },
    },
  },
]);
