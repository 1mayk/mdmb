import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import LocalizationBar from "../LocalizationBar/LocalizationBar";
import { SlLogin } from "react-icons/sl";

export default function Header() {
  return (
    <section className="header__section">
      <Link to="/">
        <img src={logo} alt="Logo do site" className="header__logo" />
      </Link>
      {/* menuzinho */}
      <ul className="menu__header">
        <li className="menu__item active">Inicio</li>
        <li className="menu__item">Sobre</li>
        <li className="menu__item">Contato</li>
      </ul>

      <SearchBar />
      <LocalizationBar />

      <SlLogin className="login__icon" />
    </section>
  );
}
