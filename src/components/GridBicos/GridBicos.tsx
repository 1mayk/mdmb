import React from "react";
import "./gridbicos.css";
import bicos from '../../assets/BICOS.png'
import ContainerBico from "../ContainerBico/ContainerBico";

export default function GridBicos() {
  return (
    <section className="grid__container">
      <img src={bicos} alt="bicos titulo" className="title"/>
      <section className="grid__bicos">
        {/* dps isso será alterado para ser um .map() */}
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
        <ContainerBico />
      </section>
    </section>
  );
}
