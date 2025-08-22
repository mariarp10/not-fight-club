import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        avatar: "./avatar.html",
        home: "./homePage.html",
        character: "./character.html",
      },
    },
  },
});