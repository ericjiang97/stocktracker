import React from "react";

import useStyles from "./styles";
import Protected from "../../containers/auth/Protected";

const DashboardPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Protected>
      <div className={classes.root}>Protected Dashboard Page!</div>
    </Protected>
  );
};

export default DashboardPage;
