const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./cypress/reports/metadata/report_metadata.json", { encoding: 'utf8', flag: 'r' }));
report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html",
  pageTitle: "Cypress Cucumber Report",
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
  metadata: {
    browser: {
      name: data.browserName,
      version: data.browserVersion,
    },
    device: "Local test machine",
    platform: {
      name: data.osName,
      version: data.osVersion,
    },
  },
  customData: {
    title: "Test's Run Info",
    data: [
      { label: "Project", value: "Cucumber Learning" },
      { label: "Node Version", value: data.nodeVersion},
      { label: "Cypress Version", value: data.cypressVersion },
      { label: "Execution Start Time", value: data.startedTestsAt},
      { label: "Execution End Time", value: data.endedTestsAt },
    ],
  },
});