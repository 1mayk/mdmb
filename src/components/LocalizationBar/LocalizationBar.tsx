import React from "react";
import "./localizationbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LocalizationBar() {
  return (
    <section className="localization__container">
      <p>Apucarana, PR</p>
      <RiArrowDropDownLine className="localization__icon" />
    </section>
  );
}
