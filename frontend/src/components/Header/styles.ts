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
  }
});

export default styles;
