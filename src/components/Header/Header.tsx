import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/perfil.png";
import SearchBar from "../SearchBar/SearchBar";
import LocalizationBar from "../LocalizationBar/LocalizationBar";
import { SlLogin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const [activeBtn, setActiveBtn] = useState<string>("inicio");
  return (
    <section className="header__section">
      <Link to="/">
        <img src={logo} alt="Logo do site" className="header__logo" />
      </Link>
      {/* menuzinho */}
      <ul className="menu__header">
        <li
          onClick={() => setActiveBtn("inicio")}
          className={
            activeBtn === "inicio" ? "menu__item active" : "menu__item"
          }
        >
          Inicio
        </li>
        <li
          onClick={() => setActiveBtn("sobre")}
          className={activeBtn === "sobre" ? "menu__item active" : "menu__item"}
        >
          Sobre
        </li>
        <li
          onClick={() => setActiveBtn("contato")}
          className={
            activeBtn === "contato" ? "menu__item active" : "menu__item"
          }
        >
          Contato
        </li>
      </ul>

      <SearchBar />
      <LocalizationBar />

      <SlLogin className="login__icon" />

      <BsSearch
        onClick={() => setActiveBtn("search")}
        className={
          activeBtn === "search"
            ? "search__icon__tiny active"
            : "search__icon__tiny"
        }
      />
    </section>
  );
}
