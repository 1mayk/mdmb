import React from "react";
import bicosTitle from "../../assets/BICOS.png";
import ContainerBico from "../ContainerBico/ContainerBico";
import { bicosArray } from "../../database/bicos";
import "./gridbicos.css";

export default function GridBicos() {
  return (
    <section className="grid__container">
      <img src={bicosTitle} alt="bicos titulo" className="title" />
      <section className="grid__bicos">
        { bicosArray.map(
          (bico) => <ContainerBico 
          key={bico.name} 
          category={bico.category} 
          name={bico.name} 
          stamp={bico.stamp} 
          thumbail={bico.thumbail}/>
        )}
      </section>
      <hr />
    </section>
  );
}
