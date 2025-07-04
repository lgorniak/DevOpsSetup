# DevOps-Ready Angular Application

This repository contains an Angular 19 application configured with a comprehensive DevOps toolchain for robust testing, security, and performance monitoring.

## 📋 Table of Contents

- [🚀 Getting Started](#-getting-started)
- [🛠️ Common Commands](#️-common-commands)
- [✅ Automated Quality Gates](#-automated-quality-gates)
- [🛡️ Security Pipeline](#️-security-pipeline)
- [⚡ Performance Monitoring](#-performance-monitoring)
- [🔄 CI/CD Workflow](#-cicd-workflow)
- [🎯 AI-Assisted Development (Cursor Rules)](#-ai-assisted-development-cursor-rules)
- [🌿 Branching & Contributions](#-branching--contributions)

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v22.15.1
- **npm**: latest version recommended
- **Angular CLI**: v19 (will be installed locally)

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd devops-setup
   ```

2. **Install Dependencies**

   This command installs all the necessary npm packages, including a local version of the Angular CLI.

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm start
   ```

   Navigate to http://localhost:4200/. The app will automatically reload on file changes.

## 🛠️ Common Commands

All primary development and quality-assurance tasks can be run using the following npm scripts.

| Command                 | Description                                           | Tool(s)     |
| ----------------------- | ----------------------------------------------------- | ----------- |
| `npm start`             | Starts the local development server with live reload. | Angular CLI |
| `npm run build`         | Builds the application for production.                | Angular CLI |
| `npm test`              | Runs all unit tests once.                             | Jest        |
| `npm run test:watch`    | Runs unit tests in interactive watch mode.            | Jest        |
| `npm run test:coverage` | Runs unit tests and generates a coverage report.      | Jest        |
| `npm run lint`          | Lints the codebase for style and quality issues.      | ESLint      |
| `npm run lint:fix`      | Automatically fixes all fixable linting issues.       | ESLint      |
| `npm run format`        | Formats all code according to project style.          | Prettier    |
| `npm run lighthouse`    | Runs a Lighthouse performance audit locally.          | Lighthouse  |
| `npm run bundlewatch`   | Checks production bundle sizes against limits.        | Bundlewatch |

## ✅ Automated Quality Gates

This project enforces high code quality standards through a series of automated checks.

### Code Formatting & Linting (ESLint + Prettier)

We use ESLint for identifying problematic patterns in code and Prettier for enforcing a consistent code style. These are configured to work together to ensure all code is readable and maintainable.

- **Configuration**: `.eslintrc.json`, `.prettierrc`
- **Automation**: A pre-commit hook via Husky automatically lints and formats staged files.

### Unit & Integration Testing (Jest)

The project uses Jest for fast, modern, and reliable testing.

- **Framework**: `jest-preset-angular` adapts Jest for the Angular ecosystem.
- **Location**: Tests (`.spec.ts` files) are co-located with the source code they test.
- **Coverage**: Reports are automatically generated in `coverage/` and uploaded to SonarCloud.

### Static Code Analysis (SonarCloud)

We use SonarCloud for continuous inspection of code quality and security.

- **Triggers**: Runs on every push and pull request to the main branch.
- **Metrics Tracked**: Code Smells, Security Vulnerabilities, Code Coverage, Duplication, and Technical Debt.
- **Configuration**: `sonar-project.properties`

## 🛡️ Security Pipeline

Multiple layers of automated security scanning are integrated into the CI/CD pipeline to identify and mitigate vulnerabilities early.

- **Static Analysis (CodeQL)**: GitHub's semantic code analysis engine scans for security vulnerabilities like XSS and SQL Injection on every push and pull request. Results appear in the GitHub Security tab.

- **Dynamic Analysis (OWASP ZAP)**: Scans the running application for a wide range of vulnerabilities based on the OWASP Top 10. Generates detailed reports on pull requests.

- **Dependency Scanning**: Automatically detects known vulnerabilities in npm dependencies. Runs on dependency changes and on a weekly schedule.

- **Secret Scanning (TruffleHog)**: Scans repository history for accidentally committed secrets like API keys and passwords on every push.

## ⚡ Performance Monitoring

Application performance is continuously monitored to ensure a fast and high-quality user experience.

### Lighthouse CI

Automatically audits every pull request for Performance, Accessibility, Best Practices, and SEO, enforcing minimum scores of 90% across all categories.

### Bundle Size Monitoring

- **Bundlewatch**: Tracks bundle sizes on every build and fails if they exceed predefined limits.
- **Angular CLI Budgets**: Configured in `angular.json` to provide build-time warnings and errors if bundle sizes exceed their thresholds.

## 🔄 CI/CD Workflow

The project uses GitHub Actions for its Continuous Integration pipeline.

- **Workflow File**: `.github/workflows/ci.yml`
- **Triggers**: Runs on pushes & pull requests to main, or can be triggered manually.

### Key Steps:

1. Checkout code
2. Set up Node.js v22.15.1
3. Install dependencies
4. Run Linting & Formatting checks
5. Execute Unit Tests & collect coverage
6. Run Production Build

## 🎯 AI-Assisted Development (Cursor Rules)

This project includes comprehensive AI coding rules that guide Cursor AI to generate high-quality, maintainable code following Angular and clean code best practices.

### Available Rule Sets

The `.cursor/rules/` directory contains specialized rule configurations that enhance AI-assisted development:

#### 🅰️ Angular Rules (`angular.mdc`)

- **Modern Angular 20+ Patterns**: Enforces standalone components, signals-based reactivity, and modern template syntax
- **Performance Best Practices**: OnPush change detection, lazy loading with deferrable views, and efficient event handling
- **Latest API Usage**: Promotes `inject()` function, signal-based inputs/outputs with `input()` and `model()`, and built-in control flow (`@if`, `@for`, `@switch`)
- **Architecture Guidelines**: Encourages clear separation of concerns and modular, standalone architecture

#### 📊 ECharts Integration (`eCharts.mdc`)

- **Optimal Integration**: Comprehensive guide for integrating Apache ECharts using the recommended `ngx-echarts` wrapper
- **Performance Optimization**: Tree-shaking configuration to reduce bundle size
- **Type Safety**: Enforces proper TypeScript types and interfaces
- **Best Practices**: Covers asynchronous data loading, chart updates, and common troubleshooting scenarios

#### 🧹 Clean Code Standards (`clean-code.mdc`)

- **Clean Code Developer Grades**: Implements principles from Red through White grades
- **SOLID Principles**: Enforces Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion
- **Code Quality**: Emphasizes DRY, KISS, YAGNI principles with focus on readability and maintainability
- **Testing & Architecture**: Promotes test-driven development and component-based design

### How Cursor Rules Enhance Development

These rules automatically guide the AI to:

✅ **Generate Modern Code**: Always produces Angular 20+ compatible code with latest patterns  
✅ **Maintain Consistency**: Ensures all generated code follows the same high standards  
✅ **Optimize Performance**: Applies performance best practices by default  
✅ **Enforce Standards**: Automatically applies clean code principles and SOLID design patterns  
✅ **Reduce Technical Debt**: Prevents common anti-patterns and code smells

### Using the Rules

The rules are automatically applied when using Cursor AI within this project. They work seamlessly with the existing DevOps pipeline, ensuring that AI-generated code:

- Passes all linting and formatting checks
- Follows the established testing patterns
- Integrates properly with the CI/CD workflow
- Maintains the project's architectural standards

## 🌿 Branching & Contributions

### Branch Protection

The main branch is protected with rules that require:

- All CI status checks to pass before merging.
- At least one peer review.
- Branches to be up-to-date before merging.

### Code Scaffolding

Use the Angular CLI to generate new components, services, and other artifacts.

```bash
# Generate a new component
ng generate component my-component

# Generate a new service
ng generate service my-service
```
