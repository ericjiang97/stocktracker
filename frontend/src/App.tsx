import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import useStyles from "./styles";

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
