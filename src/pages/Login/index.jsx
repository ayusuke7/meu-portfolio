import React from "react";
import { FaEnvelope, FaGithub, FaLock } from "react-icons/fa";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";
import storage from "../../utils/storage";

import "./styles.scss";

export default function LoginPage({ history }) {
  const handleSubmit = (data) => {
    storage.setUser({
      username: "ayusuke7",
    });
    history.push("/perfil/ayusuke7");
  };

  return (
    <div className="login-root">
      <section className="form-section">
        <h3>MEU PORTFÓLIO</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            iconLeft={<FaEnvelope />}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Email"
            spellCheck="false"
            defaultValue="email@example.com"
          />

          <Input
            required
            iconLeft={<FaLock />}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="new-password"
            defaultValue="1234"
          />

          <Button type="submit" label="ENTRAR" />
          <br />
          <span>
            Não tem uma conta? <a href="/register">Registre-se</a>
          </span>
        </Form>
        <div>
          <h5>OU</h5>
          <Button icon={<FaGithub />} label="USAR PERFIL DO GITHUB" />
        </div>
      </section>
    </div>
  );
}
