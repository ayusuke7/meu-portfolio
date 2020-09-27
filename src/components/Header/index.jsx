import React from "react";
import history from "../../utils/history";

import { Input } from "../../components";
import { Form } from "@unform/web";
import { FaSearch } from "react-icons/fa";
import storage from "../../utils/storage";

import "./styles.scss";

export default function Header() {
  const { pathname } = history?.location;
  const isRender =
    pathname !== "/" &&
    !pathname.includes("/login") &&
    !pathname.includes("/register");

  return (
    isRender && (
      <div className="header">
        <Form>
          <Input
            iconLeft={<FaSearch />}
            name="search"
            placeholder="Pesquisar"
          />
        </Form>
        <a href="/perfil/ayusuke7">PERFIL</a>
        <a href="/portfolio/ayusuke7">PORTFÓLIO</a>
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
