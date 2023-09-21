const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const now = new Date().toLocaleString();
const fs = require("fs");

function createReportJsonMeta(results) {
  fs.writeFileSync("./cypress/reports/metadata/report_metadata.json", JSON.stringify (
      {
        environment: results.config.env.configFile,
        baseUrl: results.config.baseUrl,
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
        fs.rmSync("./cypress/reports", { recursive: true, force: true });
        fs.rmSync("./cypress/downloads", { recursive: true, force: true });
        fs.rmSync("./cypress/screenshots", { recursive: true, force: true });
        fs.rmSync("./cypress/videos", { recursive: true, force: true });
        let report_dir = ["./cypress/reports/json", "./cypress/reports/messages", "./cypress/reports/metadata", "./cypress/reports/html", "./cypress/downloads", "./cypress/screenshots", "./cypress/videos"];
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

      // on('task', {
      //   beforeTest(testName) {
      //     console.log(`=== Starting Test: ${testName}, at ${now}`);
      //     return null;
      //   },
      //   afterTest(testName) {
      //     console.log(`=== Ending Test: ${testName} at ${now}`);
      //     return null;
      //   }
      // });
      const environmentName = config.env.configFile || "dev";
      const pathOfConfigurationFile = `./cypress/config/config.${environmentName}.json`;
      const settings = require(pathOfConfigurationFile);

      if(settings.baseUrl) { config.baseUrl = settings.baseUrl }

      return config;
    },
    specPattern: "cypress/integration/cucumber/**/*.feature",
    video: true,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false,
  }
});