// import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import ErrorProvoker from "./ErrorProvoker";
import { useRouteError, useLocation } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

function Error404Page() {
  const location = useLocation();
  return (
    <div id="error-404">
      <h1>404</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>No page on {location.pathname}</p>
    </div>
  );
}

const Content = () => {
  return (
    <div>
      <h1>Content</h1>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}  >
      <Route index element={<Content/>} errorElement={<ErrorPage/>}/>
      <Route path="error" element={<ErrorProvoker/>} errorElement={<ErrorPage/>}/>
      <Route path="images" element={<Images/>} errorElement={<ErrorPage/>}/>
      <Route path="*" element={<Error404Page />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
