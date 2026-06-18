import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React (Vite) frontend. The Express API runs on :5000 and is proxied in dev.
// `npm run build` emits the static SPA to /dist, which server.js serves in prod.
export default defineConfig({
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
});
