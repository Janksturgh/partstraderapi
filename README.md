# Parts Trader Part Validator API

## Table of contents

1. [About the application](#about-the-application)
2. [Installation](#installation)
3. [Testing the application](#testing-the-application)
4. [Deploying the application](#deploying-the-application)
## About the application

This application enables a repairer to submit a form which expects a part id (partId-partCode) against the PartsTrader database to validate that the part exists or any other compatible parts that fall under the same ID exist and can be used by the repairer to make their estimations of a job more efficient.

The application also gives the repairer the ability to add parts to an exclusion like which contains a list of parts that get ignored by the application which when the form is submitted does not send through to the PartsTrader database.

## Installation

Please follow the instructions below to get up and running locally:

```
git clone ...
npm install

npm run dev
```

Navigate to http://localhost:5173 to view the application

## Testing the application

The application runs tests using vitest...

## Deploying the application

The application is hosted in Github pages...