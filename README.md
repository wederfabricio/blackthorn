# Blackthorn Shopping Cart API

## Getting started

- Run `docker compose up` to start on development mode with Nodemon;

  Note: The app will start on port 8000.

- Run `docker compose run api yarn test` to run test suites with code coverage;

- Run `docker compose run api yarn typecheck` to check Typescript;

- Run `docker compose run api yarn seeder` to populate with one cart;

## Package organization

### API

- Using Express to routing listened connections;

### Development

- Using Typescript to enforce type checking;
- Nodemon with ts-node to watch file changes and compile;
- Using dotenv to configure environment variables;
- Using tsconfig-paths to configure `paths` correctly to Nodemon;

### Tests

- Jest test framework with ts-jest;
- Supertest for API test calls;

## Suggested First-Time Run

To run the environment and create data:

```bash
  docker compose up
  docker compose run yarn seeder
```

- Open [localhost:8000](http://localhost:8000) and see API Running;

- Go to the [localhost:8000/carts](http://localhost:8000/carts) link and list the carts;

- Get the ID and replace on [localhost:8000/carts/CARTID](http://localhost:8000/carts/CARTID);
