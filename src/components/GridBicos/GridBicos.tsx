import React from "react";
import "./gridbicos.css";
import ContainerBico from "../ContainerBico/ContainerBico";

export default function GridBicos() {
  return (
    <section className="grid__container">
      <p className="title">Bicos</p>
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
