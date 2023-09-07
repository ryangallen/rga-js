# rga.js

[rga-js.vercel.app](https://rga-js.vercel.app/): a [Next.js](https://github.com/Blazity/next-enterprise)
coding playground.

## Getting Started

### Prerequisites

This project runs on Node.js 18. It is recommended to use NVM to install and run Node.js:

- Linux & macOS: https://github.com/nvm-sh/nvm#installing-and-updating
- Windows: https://github.com/coreybutler/nvm-windows#installation--upgrades
  (_IMPORTANT:_ [run installer as Administrator](https://stackoverflow.com/questions/50563188/access-denied-issue-with-nvm-in-windows-10))

Once

```bash
nvm install 18
nvm use 18
```

### Running the Application

To run this code locally, follow these steps:

```bash
git clone https://github.com/ryangallen/rga-js.git
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `storybook`: Starts the Storybook server
- `build-storybook`: Builds the Storybook for deployment
- `test`: Runs unit and integration tests
- `e2e:headless`: Runs end-to-end tests in headless mode
- `e2e:ui`: Runs end-to-end tests with UI
- `format`: Formats the code with Prettier
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with Yarn
- `coupling-graph`: **Generates a coupling and cohesion graph for the components**

## Testing

- **Unit and integration tests**: Run Jest tests using `yarn test`
- **End-to-end tests (headless mode)**: Run Playwright tests in headless mode with `yarn e2e:headless`
- **End-to-end tests (UI mode)**: Run Playwright tests with UI using `yarn e2e:ui`
