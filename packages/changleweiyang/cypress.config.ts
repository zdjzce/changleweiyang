import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: 'src/**/__tests__/*.cy.{js,jsx,ts,tsx}'
  },
});
