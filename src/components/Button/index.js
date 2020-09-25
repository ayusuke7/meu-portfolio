import React from "react";

import "./styles.scss";

export default function Button({ icon, label, ...rest }) {
  return (
    <div className="button-block">
      <button {...rest}>
        {icon}
        {label}
      </button>
    </div>
  );
}
