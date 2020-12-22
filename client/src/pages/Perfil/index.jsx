import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaThumbsUp,
} from "react-icons/fa";

import links from "../../constants/links";
import Button from "../../components/Button";

import "./styles.scss";

export default function PerfilPage() {
  return (
    <div className="perfil-root">
      <div className="section">
        <div className="card-perfil">
          <div className="foto-perfil">
            <img src={links.avatar} alt="perfil" />
          </div>
          <div className="conteudo-perfil">
            <div className="title">
              <h4>ALEXANDRE HENRIQUE C BARBOSA</h4>
            </div>
            <div className="subtitle">
              <h6>{""}</h6>
            </div>
            <div className="like">
              <Button label="Seguir" icon={<FaThumbsUp />} />
            </div>
            <div className="socials">
              <FaGithub />
              <FaInstagram />
              <FaTwitterSquare />
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}
