import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Form } from "@unform/web";
import { InputField, Button } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store/ducks/user";

import "./styles.scss";

export default function LoginPage({ history }) {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const handleSubmit = (data) => {
    dispatch(actions.requestLogin(data));
  };

  return (
    <div className="login-root">
      <section className="form-section">
        <h3>MEU PORTFÓLIO</h3>
        <Form onSubmit={handleSubmit}>
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
            placeholder="password"
            autoComplete="new-password"
          />

          {!loading && <Button type="submit" label="ENTRAR" />}
          <br />
          <span>
            Não tem uma conta? <a href="/register">Registre-se</a>
          </span>
        </Form>
        {/* <div>
          <h5>OU</h5>
          <Button icon={<FaGithub />} label="USAR PERFIL DO GITHUB" />
        </div> */}
      </section>
    </div>
  );
}
