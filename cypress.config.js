const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const now = new Date().toLocaleString();
const fs = require("fs");

function createReportJsonMeta(results) {
  fs.writeFileSync("./cypress/reports/metadata/report_metadata.json", JSON.stringify (
      {
        browserName: results.browserName,
        browserVersion: results.browserVersion,
        osName: results.osName,
        osVersion: results.osVersion,
        nodeVersion: results.config.resolvedNodeVersion,
        cypressVersion: results.cypressVersion,
        startedTestsAt: results.startedTestsAt,
        endedTestsAt: results.endedTestsAt,
      },
      null,
      "\t"
    )
  );
}

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      on("before:run", () => {
        fs.rmSync("./cypress/reports/", { recursive: true, force: true });
        let report_dir = ["./cypress/reports/json", "./cypress/reports/messages", "./cypress/reports/metadata", "./cypress/reports/html"];
        report_dir.forEach((dir) => {
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
          }
        });
      });

      on('after:run', async (results) => {
        if (results) {
          await afterRunHandler(config);
          fs.writeFile("./cypress/reports/metadata/results.json", JSON.stringify(results), (err) => {
            if (err)
              console.log(err);
            else {
              console.log("Successful results has been written");
            }
          });
          createReportJsonMeta(results);
        }
      });
      return config;
    },
    specPattern: "cypress/integration/cucumber/**/*.feature",
    video: false,
    trashAssetsBeforeRuns: true
  }
});