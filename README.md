# DEPRECATED. Do NOT use this repository.
# Usage
## Running React App
First navigate to `react-app/` directory
#### `cd react-app`
\
Update node_modules with
#### `npm ci`
\
Start nodejs server using
#### `npm start`

## Running Node.js Server
Obtain config.json file containing necessary API keys. Place config.json inside `server/` directory.

Next, navigate to `server/` directory
#### `cd server`
\
Update node_modules with
#### `npm ci`
\
Start nodejs server using
#### `npm start`

## Generating documentation
See https://devhints.io/jsdoc for syntax

See https://www.inkoop.io/blog/a-guide-to-js-docs-for-react-js/ for documenting react

\
Navigate to either `react-app/` or `server/`

\
Generate jsdoc files using
#### `npm run docs`
\
View current documentation at
#### `react-app/docs/index.html`
or
#### `server/docs/index.html`


# Project File Structure
### React App

##### `src/sections/`
Components composing the main pieces of the gamePage
##### `src/pages/`
Components referenced by react-router-dom
##### `src/components/`
Custom modular React components
##### `public/`
Assets available publicly. Includes Index.html which is served to the browser on load.
##### `App.js / index.js`
Wrappers around entire React app for browser consumption
##### `package.json`
Config file for app-wide settings
##### `package-lock.json`
Contains all dependencies information
##### `node_modules/`
Includes installed dependencies. Use npm ci to install correct dependency versions according to package-lock.json.

### Node.js server
##### `bin/www`
Entry point for browsers. Sets up http server to listens on specified port.
##### `routes/`
Contains all routes available on server. Each route serves as an API entry point.
##### `model/`
See MVC architecture. Contains database files.
##### `views/`
View templates in Jade. See MVC architecture.
##### `App.js`
Require and Use middlewares and Routes. Catch and handle errors.
##### `public/`
Assets available publicly. Includes Index.html which is served to the browser on load.
##### `package.json`
Config file for app-wide settings
##### `package-lock.json`
Contains all dependencies information
##### `node_modules`
Includes installed dependencies. Use npm ci to install correct dependency versions according to package-lock.json.
