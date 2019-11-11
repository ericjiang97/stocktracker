import React, { useContext } from "react";

import useStyles from "./styles";
import { Typography, Avatar } from "@material-ui/core";
import AuthenticationContext from "../../contexts/AuthenticationContext";

const Header: React.FC = () => {
  const classes = useStyles();
  const auth = useContext(AuthenticationContext);

  const { user } = auth;
  if (!user || !user.photoURL) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        <Typography variant="body2">My StockTracker</Typography>
      </div>
      <div>
        <Avatar src={user.photoURL} />
      </div>
    </div>
  );
};

export default Header;
