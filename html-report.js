const report = require("multiple-cucumber-html-reporter");
const now = new Date().toLocaleString();

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html",
  pageTitle: "Cypress Cucumber Report",
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
  metadata: {
    browser: {
      name: "chrome",
      version: "114"
    },
    device: "Local test machine",
    platform: {
      name: "mac",
      version: "16.04",
    },
  },
  customData: {
    title: "Test's Run Info",
    data: [
      { label: "Project", value: "Cucumber Learning" },
      { label: "Release", value: "1.0.0" },
      { label: "Execution Start Time", value: `${now}` },
      { label: "Execution End Time", value: `${now}` },
    ],
  },
});