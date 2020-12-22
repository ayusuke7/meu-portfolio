import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    fontSize: "14px",
    color: theme.appColors.fontColor,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    backgroundColor: theme.palette.primary.main,
    padding: 20,
    height: 420,
    width: 450,
    textAlign: "center",

    "& form": {
      width: "70%",
      margin: "20px 0",
    },
  },
}));
