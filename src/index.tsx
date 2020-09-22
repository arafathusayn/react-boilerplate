import React from "react";
import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
}

const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    hydrate(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement,
    );
  } else {
    render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      rootElement,
    );
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
