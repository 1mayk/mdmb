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
        <p>Estrela</p>
        <p>Cupom</p>
      </div>
    </section>
  );
}
