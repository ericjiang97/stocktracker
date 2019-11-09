import { makeStyles } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

const styles = makeStyles({
  root: {
    flex: 1,
    display: "flex"
  },
  leftContainer: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to top right, ${grey[100]}, ${grey[300]})`
  },
  loginContainer: {
    background: "white",
    width: "80%",
    padding: "1.5rem 1.5rem"
  },
  rightContainer: {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(to top right, ${blue[300]}, ${blue[700]})`
  }
});

export default styles;
