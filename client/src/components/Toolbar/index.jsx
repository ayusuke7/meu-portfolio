import React from "react";
import { FaUserAlt, FaThList } from "react-icons/fa";

import "./styles.scss";

export default function Toolbar() {
  return (
    <div className="toolbar-root">
      <div className="icon">
        <FaUserAlt />
      </div>
      <div className="icon">
        <FaThList />
      </div>
    </div>
  );
}
