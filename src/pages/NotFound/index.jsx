import React from "react";

import "./styles.scss";

export default function NotFound({ history }) {
  return (
    <div className="not-found">
      <h3>
        {history?.location?.pathname}
        <br />
        NOT FOUND
      </h3>
    </div>
  );
}
