const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler} = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const now = new Date().toLocaleString();
const fs = require("fs");

function createReportJsonMeta(results) {
  // let metadata_dir = "./cypress/reports/metadata";
  // if (!fs.existsSync(metadata_dir)){
  //   fs.mkdirSync(metadata_dir, { recursive: true });
  // }

  fs.writeFileSync(
    "./cypress/reports/metadata/results.json",
    JSON.stringify(
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
        let report_dir = ["./reports/json", "./reports/message"];
        report_dir.forEach((dir) => {
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
          }
        });
      });

      on('after:run', async (results) => {
        if (results) {
          await afterRunHandler(config);
          fs.writeFile("./reports/results.json", JSON.stringify(results), (err) => {
            if (err)
              console.log(err);
            else {
              console.log("Successful results has been written");
        }
          });
        }
      });
      
      // on("after:run", async (results) => {
      //   if (results) {
      //     createReportJsonMeta(results);
      //     let sourcePath = "./cypress/reports/json";
      //     let oldExtension = "cucumber.json";
      //     let newExtension =
      //       results.browserName + "." + new Date().getTime() + ".json";
      //     fs.readdir(sourcePath, (err, files) => {
      //       if (err) {
      //         console.log("Issue in the file reading");
      //         return;
      //       }
            
      //       files.forEach((file) => {
      //         const oldFilePath = `${sourcePath}/${file}`;
      //         console.log(oldFilePath);
      //         if (file.endsWith(`.${oldExtension}`)) {
      //           const newFilePath = `${sourcePath}/${file.replace(
      //             `.${oldExtension}`,
      //             `.${newExtension}`
      //           )}`;
      //           fs.rename(oldFilePath, newFilePath, (err) => {
      //             if (err) {
      //               console.log("Issue in the file renaming");
      //             }
      //           });
      //         }
      //       });
      //     });
      //   }
      // });
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

      return config;
    },
    specPattern: "cypress/integration/cucumber/**/*.feature",
    video: false,
    trashAssetsBeforeRuns: true
  }
});