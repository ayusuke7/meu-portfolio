import React from "react";
import { Toolbar } from "../../components";

import "./styles.scss";

export default function HomePage({ history }) {
  return (
    <div className="home-root">
      <Toolbar />
    </div>
  );
}
