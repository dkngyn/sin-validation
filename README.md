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

### Approach

Start with understanding the requirements, deciding which components are needed, and laying out the UI.
Then working on the logics to handle the input form and input validation, based on the SIN validation rules.
Finally adding testing and documentation.

### Design & Implementation

I create the app using `Vite` with `Vue + Typescript` template.

I also use `Tailwind` and `DaisyUI` to create layout and UI, with different states, build out a `SinValidationForm`
component:

![Layout and UI](./docs/input-ui.jpg)

I create a `sinValidator` function that verify the input based on the SIN validation rules requirement, with a
consideration for readability, testability and reusability.

I use `Vitest` and `@vue/test-utils` to include unit testing for `sinValidator` and component testing for
`SinValidationForm`.
