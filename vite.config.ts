import { resolve } from "path";
import { defineConfig } from "vite";
import { comlink } from "vite-plugin-comlink";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  return {
    root: resolve(__dirname),
    plugins: [tsconfigPaths(), comlink()],
    publicDir: resolve(__dirname, "public"),
    css: {},
    build: {
      minify: "esbuild",
    },
    base: mode === "production" ? "/greensock/" : "/",
    esbuild: {},
    worker: {
      plugins: [comlink()],
    },
  };
});
