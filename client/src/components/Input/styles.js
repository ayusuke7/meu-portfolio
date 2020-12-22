import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  inputBlock: {
    marginTop: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "2px solid grey",

    height: "42px",
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,

    "& input": {
      height: "30px",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      border: "none",
      outline: "none",
      caretColor: theme.appColors.fontColor,
      color: theme.appColors.fontColor,
      marginLeft: "12px",
    },

    "& svg": {
      fill: theme.appColors.fontColor,
      height: "50%",
    },
  },
}));
