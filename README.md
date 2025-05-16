# DevOps Setup with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 19.

## Development Setup

### Prerequisites

- Node.js (version ^18.19.1 || ^20.11.1 || >=22.0.0)
- npm (latest version recommended)
- Angular CLI v19

### Installation Steps

1. Install Angular CLI globally:

   ```bash
   npm install -g @angular/cli
   ```

2. Project was created with:
   ```bash
   ng new devops-setup --directory . --strict
   ```
   - Using strict mode for better type safety
   - Using standalone components (default in Angular 19)
   - CSS for styling
   - No SSR/SSG setup

### Code Quality Tools

The project uses several tools to maintain code quality and consistency:

#### ESLint

ESLint is configured to enforce code quality and catch potential errors. Configuration can be found in `.eslintrc.json`.

To run ESLint manually:

```bash
npm run lint
```

#### Prettier

Prettier ensures consistent code formatting across the project. Configuration is in `.prettierrc`.

To format code manually:

```bash
npm run format
```

#### Husky and lint-staged

The project uses Husky for Git hooks and lint-staged for running linters on staged files:

- Pre-commit hook automatically runs ESLint and Prettier on staged files
- Pre-push hook performs the following checks before pushing:
  1. Runs linting and formatting checks on files
  2. Executes unit tests in headless mode
  3. Builds the application
- Configuration for lint-staged is in `package.json`

These tools run automatically when you commit or push changes, ensuring code quality and preventing issues from reaching the remote repository.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
