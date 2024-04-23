import React from "react";
import "./containerbico.css";

export default function ContainerBico() {
  return (
    <section className="bico__container">
      <div className="bico__img">
        {/* <p>Foto</p> */}
      </div>
      <div className="bico__infos">
        <p>Nome</p>
        <p>Categoria Especifica</p>
        <p>Selo</p>
      </div>
    </section>
  );
}
