import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  button: {
    height: "40px",
    width: "100%",
    borderRadius: "12px",
    backgroundColor: theme.appColors.buttonColor,
    color: theme.appColors.fontColor,
    textTransform: "uppercase",

    border: "none",
    fontWeight: "bold",
    marginBottom: 15,

    "&:hover": {
      backgroundColor: theme.appColors.blueLight,
    },
  },
}));
