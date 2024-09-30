# SIN validation

A web app validates SIN number input and checks its validity based on the Luhn algorithm.

### Install and usage

#### Production preview

```shell
docker-compose up
```

Then browse `localhost:8080`

#### Local development

```shell
npm install
npm run dev
```

Then browse: `localhost:3080`

Running tests:

```shell
npm run test
```

### Assumptions

- Only digits (0-9) are allowed as input
- Validate the input on "Validate" button click event
