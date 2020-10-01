import React from "react";
import { Form } from "@unform/web";
import { FaEnvelope, FaLock, FaArrowLeft, FaUserPlus } from "react-icons/fa";
import { InputField } from "../../components";
import Button from "../../components/Button";

import "./styles.scss";

export default function RegisterPage({ history }) {
  const handleSubmit = (data) => {};

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
          <InputField
            required
            iconLeft={<FaUserPlus />}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Nome"
          />
          <InputField
            required
            iconLeft={<FaUserPlus />}
            type="text"
            name="username"
            autoComplete="off"
            placeholder="Username"
          />
          <InputField
            required
            iconLeft={<FaEnvelope />}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Email"
            spellCheck="false"
          />
          <InputField
            required
            iconLeft={<FaLock />}
            type="password"
            name="password"
            autoComplete="new-password"
            placeholder="Senha"
          />
          <InputField
            required
            iconLeft={<FaLock />}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Confirma Senha"
          />

          <br />
          <Button type="submit" label="CADASTRAR" />
        </Form>
      </section>
    </div>
  );
}
