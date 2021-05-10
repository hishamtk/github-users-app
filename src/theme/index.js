import { colors, createMuiTheme } from "@material-ui/core";

import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1A535C",
    },
    secondary: {
      main: "#197278",
    },
    background: {
      main: "#d8f3dc",
    },
  },
  typography,
});

export default theme;
