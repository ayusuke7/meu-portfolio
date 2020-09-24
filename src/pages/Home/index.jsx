import React, { useState, useEffect } from "react";
import { CardPerfil, GridPortfolio } from "../../components";

import api from "../../services/api";
import links from "../../constants/links";

import "./styles.scss";

export default function HomePage() {
  const [repos, setRepo] = useState([]);

  const getRepos = () => {
    api
      .get(links.repositorios)
      .then(({ data }) => {
        setRepo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className="home-root">
      <div className="header"></div>
      <div className="content">
        <div className="perfil">
          <CardPerfil
            foto={links.profile}
            title="ALEXANDRE H. C. BARBOSA"
            description="ANALISTA DE SISTEMAS, PLENO São Paulo, SP - Brasil"
          />
        </div>
        <div className="portfolio">
          <GridPortfolio items={repos} />
        </div>
      </div>
      <div className="footer">
        <span>
          Desenvolvido por AYU7 - Copyright © {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}
