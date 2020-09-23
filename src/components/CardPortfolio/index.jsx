import React, { useState } from "react";

import "./styles.scss";

const languages = [
  "Java",
  "Python",
  "Javascript",
  "C++",
  "Rust",
  "Java",
  "Python",
  "Javascript",
  "C++",
  "Rust",
  "Java",
  "Python",
  "Javascript",
  "C++",
  "Rust",
];

export default function CardPortfolio() {
  const [tab, setTab] = useState(0);
  const [portfolios, setPortfolios] = useState(5);

  return (
    <>
      <div className="tabs-portfolio">
        {languages.map((item, i) => (
          <div
            className={"tab " + (i === tab ? "active" : "")}
            key={i.toString()}
            onClick={() => {
              setTab(i);
              setPortfolios(Math.round(Math.random() * 10));
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid-portfolio">
        {Array.from(Array(portfolios)).map((_, i) => (
          <div className="card-portfolio" key={i.toString()} />
        ))}
      </div>
    </>
  );
}
