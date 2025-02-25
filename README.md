# Cypress Testing Project

This is an automated testing project using [Cypress](https://www.cypress.io/) to ensure the reliability of web applications. The project is configured with TypeScript, linting, reporting, and pre-commit hooks.

## 🚀 Features
- 🧦 End-to-end testing with Cypress
- 🔍 Linting with ESLint
- 📊 Test reporting with Mochawesome
- 🛠️ TypeScript support
- 🎯 Pre-commit hooks using Husky and lint-staged

---

## 📌 Prerequisites
Make sure you have **Node.js** (18.18.0 or later) and **Yarn** installed.

### **Installation**
Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd <project-folder>
yarn install
```

---

## 🛠️ Usage

### **Run Cypress tests**
Execute all Cypress tests in headless mode:
```sh
yarn cy:run
```
Open the Cypress Test Runner:
```sh
yarn cy:open
```

### **Run Linter**

Check code quality using ESLint:
```sh
yarn lint
```
Husky is configured to run before each commit

---

## 📂 Project Structure
```
 ┗ 📂 .circleci         # CI/CD configurations
 ┗ 📂 .husky            # Pre-commit hooks
 ┗ 📂 cypress           # Cypress tests and configurations
 ┃ ┗ 📂 api             # API Test Suites
 ┃ ┗ 📂 e2e             # E2E Test Suites
 ┃ ┗ 📂 pageObjects     # Page Object Model (POM) files
 ┃ ┗ 📂 support         # Custom commands and utils
 ┗ 📝 .env              # Environment variables
 ┗ 📝 .gitignore        # Ignored files and folders
 ┗ cypress.config.ts    # Cypress configuration
 ┗ eslint.config.mjs    # ESLint configuration
 ┗ 📝 package.json      # Dependencies and scripts
 ┗ 📝 yarn.lock         # Lock file for package versions
 ┗ 📝 README.md         # Project documentation
 ┗ 📝 tsconfig.json     # TypeScript configuration
```

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
