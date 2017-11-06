# Node.js Module

## Module built-in

```js
```

## Import dan export module

```js
const something = require('./something') // tidak perlu menulis ekstensinya
```

## npm

npm is ...

Dependency is a way to ...

We can use `npm` as such:

```sh
npm
```

To make our Node app have access to available node modules through npm, we have to create a `package.json`, which is a config file that will store our node app metadata:

```sh
npm init
# you will be asked some questions, fill it based on your preference
```

After initialization, you will see a `package.json` created in your directory.

```json
{
  "name": "application",
  "version": "1.0.0",
  "description": "An application",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Full Name <name@domain.com> (https://domain.com)",
  "license": "MIT"
}
```

### Installing modules with npm or Yarn

1. **Installing package as a dependency**: Usually when we need to use the package as a library that will directly required in the app.
2. **Installing package as a development dependency**: Usually when we need to use the package as a utility that used in the repo, not directly required in the app.
3. **Installing package as globally accessible**: Usually when the package is executable to be run as a program instead of just a library inside an app.

| No | Normal | Shorter | Yarn
|----|--------|---------|------
| 1  | `npm install --save package` | `npm i -S package` | `yarn add package`
| 2  | `npm install --save-dev package` | `npm i -D package` | `yarn add --dev package`
| 3  | `npm install --global package` | `npm i -g package` | `yarn global add package`

Let's try to create a Node project with npm:

Create a new project folder

```sh
mkdir <folder_name>
```

Navigate into the folder

```sh
cd <folder_name>
```

Initialize a `package.json`

```sh
npm init
# or
yarn init
```

Install a local package you'd like to try

```sh
npm install --save colors
# or
yarn add colors
```

Take a look into the `package.json` file and the `node_modules/` folder. See what happens.

Find out how to uninstall a node package from package.json
