# Parts Trader Part Validator API

## Table of contents

1. [About the application](#about-the-application)
2. [Installation](#installation)
3. [Testing the application](#testing-the-application)
4. [Deploying the application](#deploying-the-application)
5. [Tech and principals used](#tech-and-principals-used)
## About the application

This application enables a repairer to submit a form which expects a part id against the PartsTrader database to validate that the part exists or any other compatible parts that fall under the same ID exist and can be used by the repairer to make their estimations of a job more efficient.

The application also gives the repairer the ability to add parts to an exclusion list which contains parts that get ignored by the application which when the form is submitted does not send through to the PartsTrader database.

## Installation

Please follow the instructions below to get up and running locally:

```
git clone https://github.com/Janksturgh/partstraderapi.git

npm install

npm run dev
```

Navigate to http://localhost:5173 to view the application

## Testing the application

To run tests over the whole application:

```
npm run test
```

Or

```
npm run test:ui

```

Which will open an interface in the browser to see the tests run.

## Tech and principals used

### Core Frameworks
- React: built using functional components, making use of react hooks, and also created encapsulated components where possible to enable lifting and shifting components where necessary. 
- Vite: frontend compiler with native support for ES modules and sass compiling when coupling with the sass package. it also comes with built-in HMR.

### Styling
- SCSS: Sass for maintainable and modular styles.
- REM-based layout: Responsive font-sizing using relative units for scalability across devices.
- BEM methodology to help organize CSS code when using Sass.

### Testing
- Vitest – Super quick and works seamlessly with Vite, so it keeps the dev flow smooth. It Also comes with a UI to see tests succeed/fail in a more user friendly way.
- React Testing Library – I use this to test components the way real users would actually interact with them.
- @testing-library/user-event – Makes it easy to simulate things like clicks and typing, which helps keep tests closer to real-world behavior.

### Routing
- React Router: Handles client-side routing in a clean, declarative way so I can easily manage navigation between pages.

### Tooling
- ESLint + Prettier – Keeps the codebase clean and consistent with linting and auto-formatting.
- Vite Aliases (@) – Makes imports tidier by letting me use @/ instead of messy relative paths.

