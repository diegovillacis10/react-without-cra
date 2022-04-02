# REACT WITHOUT CRA

## Commands:

```
npm init -y
```

By running this command package.json will be formed which holds important information which is required before publishing to NPM, and also defines attributes of a project that is used by npm to install dependencies, run scripts, and identify the entry point of the project.

---

```
npm install react react-dom
```

React will be needed to create user interfaces whereas React-Dom is a glue between React and browser DOM.

After running this command, node_modules and package.lock.json will be created. Node modules hold all the dependencies downloaded from npm. Package.lock.json keeps track of the exact version of every package that is installed as well as the dependency tree of every package.

---

```
npm install --save-dev webpack webpack-cli webpack-dev-server
```

Webpack is a tool that lets you compile JavaScript modules, also known as module bundlers.Given a large number of files, it generates a single file (or a few files) that run your app. Webpack-CLI provides the interface of options webpack uses in its configuration file.

Webpack dev server provides the dev setup and builds everything on in-memory and serves the HTML page by automatically injecting the script(i.e. main.js mentioned on output parameter in webpack.config.js) on it when using with html-webpack-plugin
