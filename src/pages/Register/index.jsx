import React from "react";
import Input from "../../components/Input";
import { Form } from "@unform/web";
import { FaEnvelope, FaLock, FaArrowLeft, FaUserPlus } from "react-icons/fa";

import "./styles.scss";
import Button from "../../components/Button";

export default function RegisterPage({ history }) {
  const handleSubmit = (data) => {
    history.push("/login");
  };

  const onNavigateBack = () => {
    history.goBack();
  };

  return (
    <div className="register-root">
      <section className="form-section">
        <div className="icon" onClick={onNavigateBack}>
          <FaArrowLeft />
        </div>
        <h3>NOVO CADASTRO</h3>
        <Form onSubmit={handleSubmit}>
          <Input
            required
            iconLeft={<FaUserPlus />}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nome"
          />
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
            autoComplete="new-password"
            placeholder="Senha"
          />
          <Input
            required
            iconLeft={<FaLock />}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Confirma Senha"
          />

          <Button type="submit" label="CADASTRAR" />
        </Form>
      </section>
    </div>
  );
}
