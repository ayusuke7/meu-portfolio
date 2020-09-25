import React from "react";
import history from "../../utils/history";

import "./styles.scss";

export default function Header() {
  const { pathname } = history?.location;
  const isRender =
    !pathname.includes("/login") && !pathname.includes("/register");

  return (
    isRender && (
      <div className="header">
        <a href="/perfil/ayusuke7">PerfilPage</a>
      </div>
    )
  );
}
