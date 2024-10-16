import million from "million/compiler";
import MillionLint from "@million/lint";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({
      auto: true,
    }),
    MillionLint.vite({
      enabled: true,
    }),
    react(),
    eslint(),
  ],
});
