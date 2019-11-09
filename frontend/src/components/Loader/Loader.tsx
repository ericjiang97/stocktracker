import React from "react";
import { LoaderProps } from "./types";
import { CircularProgress, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Loader: React.FC<LoaderProps> = props => {
  const { title } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="primary" />
      <Typography
        variant="body1"
        color="textPrimary"
        className={classes.message}
      >
        {title}
      </Typography>
    </div>
  );
};

export default Loader;
