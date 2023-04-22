import React from "react";
import "./searchbar.css";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  return (
    <section className="search__container">
      <BsSearch className="search__icon" />

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Qual bico você precisa?"
        className="search__input"
      />
    </section>
  );
}
