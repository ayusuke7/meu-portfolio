import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

import "./styles.scss";

export default function GridPortfolio({ items = [] }) {
  const [tab, setTab] = useState(0);
  const [portfolio, setPortfolio] = useState(null);

  const filterLanguages = () => {
    const objLang = {};

    items.forEach((repo) => {
      objLang[repo.language] = "";
    });

    return Object.keys(objLang);
  };

  const languages = filterLanguages();

  return (
    <div className="grid-root">
      <div className="section-left">
        <div className="tabs-portfolio">
          {languages.map((item, i) => (
            <div
              className={"tab " + (i === tab ? "active" : "")}
              key={i.toString()}
              onClick={() => setTab(i)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="grid-portfolio">
          {items
            .filter((f) => f?.language === languages[tab])
            .map((item, i) => (
              <div
                key={i.toString()}
                className={"card-portfolio ".concat(
                  i === portfolio ? "selected" : ""
                )}
              >
                <div className="title" onClick={() => setPortfolio(i)}>
                  <span>{item.name}</span>
                </div>
                <div className="options">
                  <a href={item.clone_url} target="__blank">
                    <FaGithub />
                  </a>
                  <div>
                    {item.stargazers_count}
                    <span> &#9733;</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="section-right"></div>
    </div>
  );
}
