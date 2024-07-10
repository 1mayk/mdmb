import React from "react";
import "./containerbico.css";
import { IBico } from "../../database/bicos";

export default function ContainerBico(bico: IBico) {
  return (
    <section className="bico__container">
      <div className="bico__img">
        {bico.thumbail}
      </div>
      <div className="bico__infos">
        <p>{bico.name}</p>
        <p>{bico.category}</p>
        <img className="stamp__img" src={bico.stamp} alt={bico.name} />
      </div>
    </section>
  );
}
