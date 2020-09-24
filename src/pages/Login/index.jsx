import React from "react";
import { FaEnvelope, FaLock, FaGithub } from "react-icons/fa";

import "./styles.scss";

export default function LoginPage({ history }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  return (
    <div className="login-root">
      <section className="form-section">
        <h2>Meu Portfólio</h2>
        <div className="form-block">
          <label>Email</label>
          <div className="input-block">
            <FaEnvelope />
            <input type="text" name="username" />
          </div>

          <label>Senha</label>
          <div className="input-block">
            <FaLock />
            <input type="password" name="password" />
          </div>
          <button type="submit" onClick={handleSubmit}>
            {"  ENTRAR"}
          </button>
          <button type="submit">
            <FaGithub />
            {"   GITHUB"}
          </button>
        </div>
        <span>
          Não tem uma conta? <a href="/#">Registre-se</a>
        </span>
      </section>
    </div>
  );
}
