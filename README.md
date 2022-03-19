# React Reference Architecture
### This is my proposal for a reference architecture for React projects. Decoupled from webpack and using typescript.
✌Feel free to fork, download or share this project.✌

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

### Let's have a chat:

<a href="https://www.linkedin.com/in/jailsom-nogueira" target='_blank'>
  <code><img title="LinkedIn" alt="My linkedin" width="28" src="https://emojis.slackmojis.com/emojis/images/1470343326/711/linkedin.png?1470343326" /></code>
</a>

<a href="mailto:jailsom.nogueira@gmail.com" target='_blank'>
  <code><img title="E-mail" alt="My e-mail" width="28" src="https://emojis.slackmojis.com/emojis/images/1450319444/38/gmail.png?1450319444" /></code>
</a>

<a href='https://wa.me/5527995792112?text=Olá%20Jay!%20Te%20achei%20pelo%20seu%20GitHub.' target='_blank'>
   <code><img title="Whatsapp" alt="My whatsapp" width="28" src="https://emojis.slackmojis.com/emojis/images/1534256857/4486/whatsapp.png?1534256857" /></code>
</a>
