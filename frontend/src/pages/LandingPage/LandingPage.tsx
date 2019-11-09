import React from "react";

import useStyles from "./styles";
import { Typography, Button } from "@material-ui/core";
import { auth } from "../../firebase";

const LandingPage: React.FC = () => {
  const classes = useStyles();

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
