import { colors, createMuiTheme } from "@material-ui/core";

import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1A535C",
    },
    secondary: {
      main: "#cad2c5",
    },
    background: {
      main: "#d8f3dc",
    },
    button: {
      main: "#354f52",
    },
  },
  typography,
});

export default theme;
