# DevOps Setup with Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) v19.

## Development Setup

### Prerequisites

- Node.js (version 22.15.1)
- npm (latest version recommended)
- Angular CLI v19

### Installation Steps

1. Install Angular CLI globally:

   ```bash
   npm install -g @angular/cli
   ```

2. Clone and install dependencies:
   ```bash
   git clone <repository-url>
   cd devops-setup
   npm install
   ```

## Development Workflow

### Development Server

Run `npm start` or `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Building the Application

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Testing

The project uses Jest as the primary testing framework, replacing the default Karma/Jasmine setup. Jest provides a more modern and faster testing environment with built-in code coverage reporting.

### Test Configuration

The Jest setup is defined in `jest.config.js` with the following key features:

- Uses `jest-preset-angular` for Angular-specific configuration
- Tests are located in the `src/` directory
- Matches files with `.spec.ts` extension
- Uses `jsdom` for browser environment simulation
- Includes path aliases for cleaner imports
- Configured with coverage reporting

### Available Test Commands

```bash
# Run tests
npm test

# Run tests in watch mode (useful during development)
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Writing Tests

Tests in this project follow these conventions:

- Files are named with `.spec.ts` extension
- Tests are co-located with the code they test
- Each test file focuses on a single component/service/feature
- Uses Angular's TestBed for component testing
- Follows component testing best practices

Coverage reports are generated in multiple formats:

- HTML report (`coverage/html/index.html`) for detailed inspection
- LCOV report for CI/CD integration
- Console summary for quick feedback

### Mocking

Jest provides built-in mocking capabilities for:

- Services and dependencies
- HTTP requests
- Time-based operations
- Component methods
- Module imports

#### Debugging Tests

To debug tests in VS Code:

1. Add a `debugger` statement in your test
2. Run the test script with the `--inspect-brk` flag
3. Attach the VS Code debugger

### Best Practices

1. Test files should be co-located with the code they test
2. Use meaningful test descriptions
3. Follow the Arrange-Act-Assert pattern
4. Mock external dependencies
5. Keep tests focused and isolated
6. Write both positive and negative test cases
7. Avoid testing implementation details
8. Maintain test readability

## Code Quality Tools

### ESLint and Prettier

Code quality and formatting are enforced using ESLint and Prettier:

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

Configuration files:

- `.eslintrc.json` - ESLint configuration
- `.prettierrc` - Prettier configuration

### Git Hooks (Husky)

Automatic code quality checks are run using Husky:

- Pre-commit: Runs ESLint and Prettier on staged files
- Pre-push: Runs linting, tests, and build

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment.

### CI Workflow

The CI pipeline runs automatically on:

- Push to main branch
- Pull requests to main branch
- Manual trigger

Steps include:

1. Code checkout
2. Node.js 22.15.1 setup
3. Dependencies installation
4. Linting
5. Unit tests with coverage
6. Build verification

Artifacts produced:

- Test coverage reports
- Build output

## Security Scanning

The project includes multiple security scanning workflows:

### CodeQL Analysis

- Static code analysis to identify security vulnerabilities
- Runs on push to main, pull requests, and weekly
- Detects issues like SQL injection, XSS, etc.
- Results viewable in GitHub Security tab

### OWASP ZAP Dynamic Scanning

- Dynamic Application Security Testing (DAST)
- Scans the running application for security vulnerabilities
- Runs on pull requests and weekly schedule
- Tests for:
  - Cross-Site Scripting (XSS)
  - SQL Injection
  - Path Traversal
  - Security Misconfigurations
  - And other OWASP Top 10 vulnerabilities
- Generates detailed HTML and JSON reports
- Customized rules in `.zap/rules.tsv`

### Dependency Scanning

- Automatically checks npm dependencies for vulnerabilities
- Runs on package.json/package-lock.json changes
- Weekly scheduled scans to catch newly discovered vulnerabilities
- Fails the build for critical security issues

### Secret Scanning

- Uses TruffleHog to detect accidentally committed secrets
- Scans the repository for API keys, tokens, passwords, etc.
- Runs on push to main and pull requests
- Only flags verified secrets to reduce false positives

## Branch Protection

The main branch is protected with:

- Required status checks (CI workflow must pass)
- Required reviews
- Up-to-date branch requirement

## Code Scaffolding

Generate new components and other artifacts using Angular CLI:

```bash
ng generate component my-component
ng generate service my-service
ng generate pipe my-pipe
```

## Performance Monitoring

The project includes comprehensive performance monitoring tools and checks to ensure optimal application performance.

### Lighthouse CI

Automated performance, accessibility, SEO, and best practices auditing using Lighthouse:

- Runs on every pull request and push to main
- Checks performance metrics:
  - First Contentful Paint
  - Time to Interactive
  - Speed Index
  - Total Blocking Time
  - Largest Contentful Paint
  - Cumulative Layout Shift
- Enforces minimum scores:
  - Performance: 90%
  - Accessibility: 90%
  - Best Practices: 90%
  - SEO: 90%
- Generates HTML and JSON reports
- Available as GitHub Actions artifacts

Run locally:

```bash
# Start development server
npm start

# Run Lighthouse audit
npm run lighthouse
```

### Bundle Size Monitoring

Bundlewatch tracks bundle sizes and enforces size limits:

- Monitors main bundle, polyfills, and styles
- Compares sizes between builds
- Enforces size limits:
  - Main bundle: 400KB
  - Polyfills: 100KB
  - Styles: 10KB

Run locally:

```bash
npm run bundlewatch
```

### Angular CLI Budgets

Build-time bundle size monitoring:

- Configured in angular.json
- Warns at 500KB total initial bundle size
- Errors at 1MB total initial bundle size
- Component-specific style size limits:
  - Warning: 3KB
  - Error: 4KB

These tools work together to ensure:

- Fast initial load times
- Optimal bundle sizes
- High-quality user experience
- Adherence to web best practices

## Further Help

- [Angular CLI Documentation](https://angular.io/cli)
- [Jest Documentation](https://jestjs.io/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
