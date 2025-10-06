import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // 👈 el nombre EXACTO de tu repositorio en GitHub (respetá mayúsculas)
});
