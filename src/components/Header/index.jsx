import React from "react";

import { TextField } from "../../components";
import { FaSearch } from "react-icons/fa";
import storage from "../../utils/storage";

import "./styles.scss";

export default function Header() {
  const user = storage.getUser();

  return (
    user && (
      <div className="header">
        <TextField
          iconLeft={<FaSearch />}
          name="search"
          placeholder="Pesquisar"
        />
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
