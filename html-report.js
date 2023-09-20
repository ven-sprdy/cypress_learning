const report = require("multiple-cucumber-html-reporter");
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./cypress/reports/metadata/report_metadata.json", { encoding: 'utf8', flag: 'r' }));

const mapOs = (os) => {
  if(os.startsWith('win')) {
      return 'windows';
  } else if (os.startsWith('darwin')) {
      return 'osx';
  } else if (os.startsWith('linux')) {
      return 'linux';
  } else if (os.startsWith('ubuntu')) {
      return 'ubuntu';
  } else if (os.startsWith('android')) {
      return 'android';
  } else if (os.startsWith('ios')) {
      return 'ios';
  }
};

report.generate({
  jsonDir: "./cypress/reports/json",
  reportPath: "./cypress/reports/html",
  pageTitle: "Cypress Cucumber Report",
  displayDuration: true,
  durationInMS: false,
  displayReportTime: true,
  openReportInBrowser: true,
  pageFooter: "<div class=\"created-by\"><p><b>A cypress cucumber html report.</b></p></div>",
  metadata: {
    browser: {
      name: data.browserName,
      version: data.browserVersion,
    },
    device: "Local test machine",
    platform: {
      name: mapOs(data.osName),
      version: data.osVersion,
    },
  },
  customData: {
    title: "Test's Run Info",
    data: [
      { label: "Project", value: "Cucumber Learning" },
      { label: "Node Version", value: data.nodeVersion },
      { label: "Cypress Version", value: data.cypressVersion },
      { label: "Execution Start Time", value: new Date(data.startedTestsAt).toLocaleString() },
      { label: "Execution End Time", value: new Date(data.endedTestsAt).toLocaleString() },
    ],
  },
});