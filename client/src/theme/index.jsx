import { ptBR } from "@material-ui/core/locale";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import appColors from "./colors";

const AppTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: appColors.primaryColor,
        dark: appColors.primaryColorDark,
      },
    },
    appColors,
    typography: {
      fontFamily: ["Roboto"].join(","),
    },
  },
  ptBR
);

export default AppTheme;
