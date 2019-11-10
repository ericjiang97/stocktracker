import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";

import useStyles from "./styles";
import { auth } from "../../firebase";
import { useAuth } from "../../firebase/firebase";
import AuthenticationContext from "../../contexts/AuthenticationContext";

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const { isLoaded, user } = useContext(AuthenticationContext);

  if (isLoaded && user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className={classes.root}>
      <div className={classes.leftContainer}>
        <div className={classes.loginContainer}>
          <Typography variant="h5">Welcome to My StockTracker</Typography>
          <Typography variant="body1" color="textSecondary">
            The online portfolio tracker
          </Typography>

          <div style={{ marginTop: "1.25rem" }}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                auth.doSignInWithGoogle();
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <img
          src="/images/investment.svg"
          style={{ maxWidth: 300 }}
          alt="investment"
        />
      </div>
    </div>
  );
};

export default LandingPage;
