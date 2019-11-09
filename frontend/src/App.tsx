import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

import useStyles from "./styles";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </div>
  );
};

export default App;
