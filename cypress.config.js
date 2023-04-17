const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "437v2w",

  e2e: {
    baseUrl: "http://localhost:3000",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
