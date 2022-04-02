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
