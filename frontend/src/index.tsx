import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { MuiThemeProvider } from "@material-ui/core";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

import muiTheme from "./config/theme";
import "./index.css";
import { AuthenticationProvider } from "./providers/AuthenticationProvider";

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <AuthenticationProvider>
      <Router>
        <App />
      </Router>
    </AuthenticationProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
