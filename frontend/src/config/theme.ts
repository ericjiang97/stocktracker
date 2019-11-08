import { createMuiTheme } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { blue, deepOrange } from "@material-ui/core/colors";

export const theme: ThemeOptions = {
  palette: {
    primary: blue,
    secondary: deepOrange
  }
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
