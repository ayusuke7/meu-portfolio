import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import { actions } from "../../store/ducks/portfolio";
import storage from "../../utils/storage";
import PreviewHtml from "../../components/PreviewHtml";

import "./styles.scss";

export default function PortfolioPage({ history }) {
  const dipatch = useDispatch();
  const user = storage.getUser();

  const portfolio = useSelector((state) => state?.portfolio?.data);

  const [tab, setTab] = useState("Todas");
  const [select, setSelect] = useState(null);

  const getPortfolios = () => {
    const { location } = history;
    const username = location?.pathname?.split("/").slice(-1)[0] || "";
    if (username) {
      dipatch(actions.getPortfolios(username));
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  const filterLanguages = () => {
    if (!portfolio) return [];

    return portfolio.reduce((acum, item) => {
      if (!acum.includes(item.language)) {
        acum.push(item.language);
      }
      return acum;
    }, []);
  };

  const languages = filterLanguages();

  return (
    <div className="portfolio-root">
      <div className="section-left">
        <div className="tabs-portfolio">
          {["Todas", ...languages].map((item, i) => (
            <div
              key={i.toString()}
              className={"tab ".concat(item === tab ? "active" : "")}
              onClick={() => setTab(tab)}
            >
              {item || "???"}
            </div>
          ))}
        </div>
        <div className="grid-portfolio">
          {portfolio?.map((item, i) => (
            <div
              key={i.toString()}
              className={"card-portfolio ".concat(
                item?.name === select ? "selected" : ""
              )}
            >
              <div className="title" onClick={() => setSelect(item?.name)}>
                <span>{item.name}</span>
                <h6>{item.languages || "???"}</h6>
              </div>
              <div className="options">
                <a href={item.url} target="__blank">
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

      <div className="section-right">
        {select && <PreviewHtml html={select?.description} />}
      </div>
    </div>
  );
}
