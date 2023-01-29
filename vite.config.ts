import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      $public: resolve("./public"),
      $assets: resolve("./src/assets"),
      $components: resolve("./src/components"),
      $views: resolve("./src/views"),
    },
  },
});
