# Show Styling with Styled Components and Error Handling in React
- All styling in App.jsx

## 3 types of errors
1. **JS runtime errors**: These are errors that occur when the code is running. These are the most common type of errors and are usually caused by a mistake in the code.
2. **Network errors**: These are errors that occur when the application is trying to communicate with a server. These errors are usually caused by a problem with the network connection.
3. **React render errors**: These are errors that occur when the React application is rendering. These errors are usually caused by a problem with the React code.

## How to handle errors in React
1. **JS runtime errors**: To handle JS runtime errors, you can use the `try...catch` statement. This statement allows you to catch errors that occur in a block of code and handle them gracefully. In this example the ErrorProvoker component shows 3 buttons.
  - 1. button throws a JS runtime error
  - 2. button throws a network error
  - 3. button throws a React render error

The 2 first errors are shown in an error banner at the top of the App component. The last error is shown in the error page provided with the react router routes errorElement

- This way we can handle React render errors only on pages where it is more likely to occur because of the complexity of the page or the use of third-party libraries that might throw errors.# repo auto created
# repo auto created
