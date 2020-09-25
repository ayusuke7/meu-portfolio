import React from "react";
import history from "../../utils/history";

import "./styles.scss";

export default function Footer() {
  const { pathname } = history?.location;
  const isRender =
    !pathname.includes("/login") && !pathname.includes("/register");

  return (
    isRender && (
      <div className="footer">
        <span>
          Desenvolvido por AYU7 - Copyright © {new Date().getFullYear()}
        </span>
      </div>
    )
  );
}
