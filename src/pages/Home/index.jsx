import React from "react";
import { CardPerfil, CardPortfolio } from "../../components";

import "./styles.scss";

export default function HomePage() {
  return (
    <div className="home-root">
      <div className="header"></div>
      <div className="content">
        <div className="perfil">
          <CardPerfil
            title="ALEXANDRE HENRIQUE C BARBOSA"
            foto="https://xesque.rocketseat.dev/users/avatar/profile-c30be351-0b37-49c3-9dae-21cacfa1ba64-1600690358659.jpg"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
          />
        </div>
        <div className="portfolio">
          {Array.from(Array(15)).map((_, i) => (
            <CardPortfolio />
          ))}
        </div>
      </div>
      <div className="footer">
        <span>Meu Portfólio - Copyright © {new Date().getFullYear()}</span>
      </div>
    </div>
  );
}
