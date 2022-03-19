# Public React Reference Architecture

## Develop

`npm start`
[https://localhost:3000]

## Build

`npm run build`

## Unit Tests

`npm run test`

## Lint Test

`npm run lint`

## Lint Fixes

`npm run lint-fix`

**This is your source code tree:**

```
src
|-- commom
  |-- assets
  |-- mocks
  |-- styles
  |-- utils
|-- components
|-- configs
|-- containers
|-- hooks
|-- pages
|-- routes
|-- services
|-- Bootstrap.tsx
|-- index.ts
...
```
**This is your component structure:**

```
...
components
|-- YourComponent
   |-- YourComponent.tsx
   |-- YourComponent.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.ts
...
```

**This is your page structure:**

```
...
pages
|-- YourPage
   |-- components/
   |-- YourPage.tsx
   |-- YourPage.spec.ts
   |-- interfaces.ts
   |-- styles.ts
   |-- index.ts
...
```

**These are the folders and their functions:**

`./commom`

Here will be all your project assets as images, icons...

`./components`

Components are presentational only elements, grouping simple UI items

`./configs`

Enviroment rules and ssl certificates

`./containers`

Containers handle dependency injection, decoupling the application from the library

`./hooks`

Hooks are functions that allow you to “plug in” to React's state and lifecycle features from functional components

`./pages`

Pages are mapped in routes and have all the containers needed to implement a functionality

`./routes`

Routes contains the `react-router-dom` implementation to map the project's routes to the respective pages

`./services`

Services are responsible to handle the connection with all external elements, like APIs

`./utils`

Directory to keep all utils functions to share all over the project
