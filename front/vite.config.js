import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/photos": {
        target: "http://localhost:3000",
      },
      "/update_photos": {
        target: "http://localhost:3000",
      },
      "/delete": {
        target: "http://localhost:3000",
      },
      "/toranpu": {
        target: "http://localhost:3000",
      },
      "/rakuten": {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
});
