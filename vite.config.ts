import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    minify: "esbuild",

    rollupOptions: {
      input: "h5p-editor-uuid.ts",
      output: {
        file: "h5p-editor-uuid.js",
        dir: null,
        inlineDynamicImports: true,
        manualChunks: null,
      },
    },

    target: "es2015",
  },
});
