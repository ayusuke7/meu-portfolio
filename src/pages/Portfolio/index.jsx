import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { dataHtml } from "../../constants/texts";
import { actions } from "../../store/ducks/portfolio";

import PreviewHtml from "../../components/PreviewHtml";

import "./styles.scss";

export default function PortfolioPage({ history }) {
  const dipatch = useDispatch();
  const portfolio = useSelector((state) => state?.portfolio?.data);
  const [state, setState] = useState({
    tab: "Todas",
    selectPortfolio: null,
  });

  const getPortfolios = () => {
    const { location } = history;
    const username = location?.pathname?.split("/").slice(-1)[0] || "";
    dipatch(actions.getPortfolios(username));
  };

  useEffect(() => {
    if (portfolio.length === 0) {
      getPortfolios();
    }
  }, []);

  const filterLanguages = () => {
    return portfolio.reduce((acum, item) => {
      if (!acum.includes(item.language)) {
        acum.push(item.language);
      }
      return acum;
    }, []);
  };

  const languages = filterLanguages();
  const filter =
    state?.tab === "Todas"
      ? portfolio
      : portfolio.filter((f) => f?.language === state?.tab);

  return (
    <div className="portfolio-root">
      <div className="section-left">
        <div className="tabs-portfolio">
          {["Todas", ...languages].map((item, i) => (
            <div
              key={i.toString()}
              className={"tab ".concat(item === state?.tab ? "active" : "")}
              onClick={() => {
                setState((prev) => ({
                  ...prev,
                  tab: item,
                }));
              }}
            >
              {item || "???"}
            </div>
          ))}
        </div>
        <div className="grid-portfolio">
          {filter.map((item, i) => (
            <div
              key={i.toString()}
              className={"card-portfolio ".concat(
                item?.name === state?.selectPortfolio ? "selected" : ""
              )}
            >
              <div
                className="title"
                onClick={() => {
                  setState((prev) => ({
                    ...prev,
                    selectPortfolio: item?.name,
                  }));
                }}
              >
                <span>{item.name}</span>
                <h6>{item.language || "???"}</h6>
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

      <div className="section-right">
        {state?.selectPortfolio && <PreviewHtml html={dataHtml} />}
      </div>
    </div>
  );
}
