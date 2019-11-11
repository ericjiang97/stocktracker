import React from "react";

import useStyles from "./styles";
import Protected from "../../containers/auth/Protected";
import Header from "../../components/Header";

const DashboardPage: React.FC = () => {
  const classes = useStyles();

  return (
    <Protected>
      <div className={classes.root}>
        <Header />
        <div>Protected Dashboard Page!</div>
      </div>
    </Protected>
  );
};

export default DashboardPage;
