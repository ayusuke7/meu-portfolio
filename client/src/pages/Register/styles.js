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
    position: "relative",
    padding: "40px 10px",
    width: 450,
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,

    "& form": {
      width: "70%",
      marginTop: 20,
    },
  },

  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    color: theme.appColors.fontColor,

    "& .MuiSvgIcon-root": {
      fontSize: "0.9em",
    },
  },
}));
