import React, { useState } from "react";

import { FaGithub } from "react-icons/fa";

import "./styles.scss";

export default function GridPortfolio({ items = [] }) {
  const [tab, setTab] = useState(0);

  const filterLanguages = () => {
    const objLang = {};

    items.forEach((repo) => {
      objLang[repo.language] = "";
    });

    return Object.keys(objLang);
  };

  const languages = filterLanguages();

  return (
    <>
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
            <div className="card-portfolio" key={i.toString()}>
              <h2 className="title">{item.name}</h2>
              <div className="options">
                <div>
                  {item.stargazers_count}
                  <span> &#9733;</span>
                </div>
                <a href={item.clone_url} target="__blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
