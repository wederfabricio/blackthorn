# Blackthorn Shopping Cart API

## Getting started

- Run `docker compose up` to start on development mode with Nodemon;

  Note: The app will start on port 8000.

- Run `docker compose run api yarn test` to run test suites with code coverage;

## Package organization

### API

- Using Express to routing listened connections;

### Development

- Using Typescript to enforce type checking;
- Nodemon with ts-node to watch file changes and compile;

### Tests

- Jest test framework with ts-jest;
- Supertest for API test calls;
