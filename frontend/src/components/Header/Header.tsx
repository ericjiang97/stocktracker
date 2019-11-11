import React, { useContext, useState, MouseEventHandler } from "react";

import useStyles from "./styles";
import {
  Typography,
  Avatar,
  Popper,
  Paper,
  Divider,
  Button
} from "@material-ui/core";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import { doSignOut } from "../../firebase/auth";

const Header: React.FC = () => {
  const classes = useStyles();
  const useAuth = useContext(AuthenticationContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { user } = useAuth;

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  if (!user || !user.photoURL) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.navigationContainer}>
        <Typography variant="body2">My StockTracker</Typography>
      </div>
      <div>
        <Avatar src={user.photoURL} onClick={handleClick} />
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper className={classes.paper}>
            <div className={classes.userDialogHeader}>
              <Avatar src={user.photoURL} className={classes.bigAvatar} />
              <Typography variant="body1" color="textPrimary">
                {user.displayName}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {user.email}
              </Typography>
            </div>
            <Divider />
            <div
              className={classes.userDialogHeader}
              style={{ marginTop: "0.5rem" }}
            >
              <Button onClick={() => doSignOut()} variant="outlined">
                Sign out
              </Button>
            </div>
          </Paper>
        </Popper>
      </div>
    </div>
  );
};

export default Header;
