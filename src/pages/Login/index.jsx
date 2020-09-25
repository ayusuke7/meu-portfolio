import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Form } from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.scss";

export default function LoginPage({ history }) {
  const handleSubmit = (data) => {
    history.push("/home");
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
          />

          <Input
            required
            iconLeft={<FaLock />}
            type="password"
            name="password"
            placeholder="password"
            autoComplete="new-password"
          />

          <Button type="submit" label="ENTRAR" />
        </Form>
        <span>
          Não tem uma conta? <a href="/register">Registre-se</a>
        </span>
      </section>
    </div>
  );
}
