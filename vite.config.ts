import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: resolve(__dirname),
  plugins: [tsconfigPaths()],
  publicDir: resolve(__dirname, "public"),
  css: {},
  build: {
    minify: "esbuild",
  },
  esbuild: {},
});
