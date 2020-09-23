import React from "react";
import icons from "../../assets/icons";
import "./styles.scss";

export default function CardPerfil({ foto, title, description }) {
  return (
    <div className="card-perfil">
      <div className="foto-perfil">
        <img src={foto} alt="perfil" />
      </div>
      <div className="conteudo-perfil">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="subtitle">
          ANALISTA DE SISTEMAS, PLENO <br /> São Paulo, SP - Brasil
        </div>
        <div className="socials">
          <img src={icons.twitter} alt="github" />
          <img src={icons.instagram} alt="github" />
          <img src={icons.github} alt="github" />
          <img src={icons.linkedin} alt="github" />
        </div>
      </div>
    </div>
  );
}
