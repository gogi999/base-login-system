# Base Login System

This is the system with register and log-in functionalities.

# Description:

This application allows users to register, log in and access protected page to logged in users. The intention is that the system should provide JWT authentication functionality, and later can be extended into system with more useful functionalities.


# Application's main features:

- First page - a page with App name and two buttons (register and login), shown to all users when they access the system.
- Register form.
- Log in form.
- Access protected page only accessible to logged-in users with  log out button.
- Stay logged in after closing the app or refresh the page. If logged in and inactive for longer than 10 minutes, a user is logged out and required to log in again before continuing using the system.


# Technologies Built With:

- HTML
- CSS
- JS
- React JS
- Material-UI
- Node.js
- Express
- MongoDB and Mongoose

# List of all libraries - frontend:

- axios
- react
- react-dom
- react-scripts
- material-ui/core
- material-ui/
- classnames
- is-empty
- jwt-decode
- prop-types
- react
- react-dom
- react-idle-timer
- react-redux
- react-router-dom
- react-scripts
- redux
- redux-devtools-extension
- redux-thunk

# List of all libraries - backend:

- bcryptjs
- concurrently
- cors
- dotenv
- express
- express-fileupload
- express-sanitizer
- helmet
- jsonwebtoken
- lodash
- mongoose
- passport
- passport-jwt
- validator
- winston

# How to clone, install and start application

To get a local copy up and running follow these simple steps:

IMPORTANT - use node version 17.0.1

1. Clone the repository
### `git clone https://github.com/gogi999/base-login-system.git`

2. Install NPM packages:
- Go to `frontend` folder
### `npm install`

- Go to `backend` folder
### `npm install`

3. Add `.env` file in `backend` folder with following key value pairs:
- PORT
- JWT_SECRET
- MONGO_URI

