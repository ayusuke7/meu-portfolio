import React from "react";

import { Input } from "../../components";
import { Form } from "@unform/web";
import { FaSearch } from "react-icons/fa";
import storage from "../../utils/storage";

import "./styles.scss";

export default function Header() {
  const user = storage.getUser();

  return (
    user && (
      <div className="header">
        <Form>
          <Input
            iconLeft={<FaSearch />}
            name="search"
            placeholder="Pesquisar"
          />
        </Form>
        <a href={`/perfil/${user?.username}`}>PERFIL</a>
        <a href={`/portfolio/${user?.username}`}>PORTFÓLIO</a>
        <a
          href="/login"
          onClick={() => {
            storage.removeUser();
          }}
        >
          SAIR
        </a>
      </div>
    )
  );
}
