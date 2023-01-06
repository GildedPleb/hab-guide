# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

The website is deployed at https://gildedpleb.github.io/hab-guide

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

GitHub Actions are used to handle deployment. When the Master branch has new
commits, a new deployment will commence.
