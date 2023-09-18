## Getting Started

### Prerequisites

| Software | Min. version     | Info                             | 
|----------|------------------|----------------------------------|
| NodeJS   | 20 and above     | Usage for npm.                   |
| Cypress  | 13 and above     | Usage for writing cypress tests. |
| VS Code  | 1.82.0 and above | Usage for writing cypress tests. |
| Chrome   |                  | Usage for running cypress tests. |

### Installing

Checkout this repository and go into the directory:

```
git clone https://github.com/ven-sprdy/cypress_learning.git
cd cypress_learning
```

Install with npm: 

```
npm install
```

### VS Code IDE Installation

```
Download VS Code from https://code.visualstudio.com/download
Useful VS Code Plugins:
    Cypress Snippets
    Cypress Helper
    Cypress Fixture-IntelliSense
    Cucumber (Gherkin) Full Support
    vscode-icons
```

### Testing

Run the tests in a new terminal:

```
npm test
```

Run the tests in a headless mode:

```
npm headless
```

#### Page objects

Page objects are placed in the path `./cypress/integration/cucumber/pages`.

#### Cucumber steps

Cucumber steps are placed in the path `./cypress/integration/cucumber/tests/steps`.

#### Feature files

Feature files are placed in the path `./cypress/integration/cucumber/tests/features`.

#### Test data files

Test data files are placed in the path `./cypress/fixtures`.

#### Reporting

Generate reports in terminal:

```
npm run report
```

Report are placed in the path `./cypress/reports/html/index.html`.

#### Screenshots

Screenshots are placed in the path `./cypress/reports/screenshots`.

#### Videos

Videos are placed in the path `./cypress/reports/videos`. To enable videos of test run enable "video" attribute in cypress.config.js

## Configuration

### Change browser

Change the parameter `--browser` in the `package.json` inside script command `test`.
