import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React (Vite) frontend.
// - Local dev / Express prod serving uses base "/".
// - The GitHub Pages build (`npm run deploy`, mode "ghpages") uses the repo
//   sub-path so assets resolve at https://<user>.github.io/Ankit-Edu2/.
export default defineConfig(({ mode }) => ({
  base: mode === "ghpages" ? "/Ankit-Edu2/" : "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
}));
