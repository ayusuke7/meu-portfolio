import React from "react";
import api from "../../services/api";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

import { ReactComponent as Like } from "../../assets/icons/like.svg";

import "./styles.scss";

export default function CardPerfil({ foto, title, description }) {
  const githubLogin = () => {
    api
      .get("https://github.com/login/oauth/authorize", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-perfil">
      <div className="foto-perfil">
        <img src={foto} alt="perfil" />
      </div>
      <div className="conteudo-perfil">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="like">
          <div className="button" onClick={githubLogin}>
            <Like />
            <span> Seguir</span>
          </div>
        </div>
        <div className="subtitle">{description}</div>
        <div className="socials">
          <FaGithub />
          <FaInstagram />
          <FaTwitterSquare />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
}
