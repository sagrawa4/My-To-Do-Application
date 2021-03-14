# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### My Notes ###

# Adding state to a component :

- Use a class component instead of function component to use state.
- Remove function keyword, and move the JS method inside the class.
- To add state to a component, use constructor and initialize the state.
- To use this, call super() class inside construtor.
- Once state is set, update the state in crement method but not directly
- We need to bind this to increment method inside the class.
- To update the state, we never update state directly
- To update state, use setState method
- Once you call setState method, React will look what is changing and will
    efficintly update the component state.
- To call a locally defined method use {this.methodname}

# Set state using ArrowFunction
- Seprate to value using comma
- With arrow function you dont need to bind explicitly.

# Props
- Use defaultProps and propTypes 

# Use prevState in arrow function to setState

# Adding Decrement button and Reset Button

# Calling parent method in child.
- Use arrow function and pass the props in function

# For a control componenet
- Source of truth is the state of the componenet

# To create a generic event for all the changes happening when a state change
- use [event.target.name], this gives the state     object that we are trying to change and 
  equate the value with event.target.value

# && in Reacr JSX
- true && "myString" gives myString
- false && "myString" gives false

# Use react router to route from one component to other
- npm add add react-router-dom
- import {BrowserRouter as Router, Route} from 'react-router-dom'

# To go from login page to welcome on click
- Use this.props.history.push("/welcome")

# Adding an error component to your route
- Create an error component
- Add it to your Router
-Use Switch to move to different components
- Dont forget to import swirch from 'react-router-dom'

# FrameWork used to make HTTP calls is Axios
- helps in making async calls.

# To change Localhost port from 3000 to 4200
- Goto Package.jason
- Under Scripts "start": "PORT=4200 react-scripts start",

# to install axios.
- Stop the localhost "Control+z"
- cmd "npm add axios"