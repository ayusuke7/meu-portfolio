import React from "react";
import "./styles.scss";

export default function Footer() {
  return (
    <div className="footer">
      <span>
        Desenvolvido por AYU7 - Copyright © {new Date().getFullYear()}
      </span>
    </div>
  );
}
