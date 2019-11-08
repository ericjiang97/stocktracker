import { createMuiTheme } from "@material-ui/core";
import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { blueGrey } from "@material-ui/core/colors";

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: blueGrey[500]
    }
  }
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
