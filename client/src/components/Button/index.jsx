import React from "react";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles";

export default function CustomButton({ label, ...rest }) {
  const classes = useStyles();

  return (
    <Button variant="contained" className={classes.button} {...rest}>
      {label}
    </Button>
  );
}
