import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: "0.75rem 1.25rem",
    borderBottom: "1px solid #ccc",
    alignItems: "center"
  },
  navigationContainer: {
    flex: 1,
    justifyContent: "center"
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  paper: {
    padding: "2rem",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.3);"
  },
  userDialogHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

export default styles;
