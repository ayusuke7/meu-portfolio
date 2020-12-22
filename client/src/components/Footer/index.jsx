import React from "react";
import { useStyles } from "./styles";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <span>
        Desenvolvido por AYU7 - Copyright © {new Date().getFullYear()}
      </span>
    </div>
  );
}
