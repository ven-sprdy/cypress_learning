## Getting Started

### Prerequisites

| Software | Min. version | Info                             | 
|----------|--------------|----------------------------------|
| NodeJS   | 20 and above | Usage for npm.                   |
| Cypress  | 13 and above | Usage for writing cypress tests. |
| Chrome   |              | Usage for running cypress tests. |

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

Videos are placed in the path `./cypress/reports/videos`.

## Configuration

### Change browser

Change the parameter `--brwoser` in the `package.json` inside script command `test`.