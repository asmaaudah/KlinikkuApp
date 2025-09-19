# KlinikkuApp


---

# 🚀 Web Automation Project – Cypress

This project contains end-to-end (E2E) test automation for the web application using **Cypress**.

---

## 📦 Prerequisites

Make sure you have installed:

* **Node.js** (v14 or later)
* **npm** (comes with Node.js) or **yarn**

Check versions:

```bash
node -v
npm -v
```

---

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asmaaudah/KlinikkuApp.git
   cd KlinikkuApp
   ```
2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

---

## ⚙️ Project Structure

```
cypress/
 ├── e2e/                # Test specs (your test cases)
 ├── fixtures/           # Test data (e.g., example.json for credentials)
 ├── support/            # Custom commands & setup
 └── downloads/          # (optional) Downloaded files from tests
cypress.config.js        # Cypress configuration
package.json             # Dependencies & scripts
```

---

## 🛠 Configuration

Set **baseUrl** and timeouts in `cypress.config.js`:

```javascript
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa-test-six.vercel.app/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
});
```

Put test data (e.g., login credentials) in `cypress/fixtures/example.json`:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

## ▶️ Running Tests

### Open Cypress Test Runner (GUI mode):

```bash
npx cypress open
```

### Run Tests in Headless Mode (CLI):

```bash
npx cypress run
```

### Run Specific Spec:

```bash
npx cypress run --spec "cypress/e2e/LoginPage.cy.js"
```

---

## 🧪 Example Test (Login)

```javascript
describe('Verify user can Login successfully', () => {
  beforeEach(() => {
    cy.fixture('example').as('userData')
  })

  it('should log in and display patient list page', function () {
    cy.visit('/')
    cy.get('#email').clear().type(this.userData.email)
    cy.get('#password').clear().type(this.userData.password)
    cy.get('.mt-8 > .flex').click()

    cy.get('.lg\\:col-span-2 > .bg-white\\/70', { timeout: 10000 })
      .should('be.visible')
  })
})
```

---

## 📊 Reports

To generate test reports, you can integrate with:

* **Mochawesome** (HTML reports)
* **Allure Reporter** (advanced reports with history)

Example installation for Mochawesome:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

---
