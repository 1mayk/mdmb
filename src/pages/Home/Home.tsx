import React from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import Selos from "../../components/Selos/Selos";
import GridBicos from "../../components/GridBicos/GridBicos";

export default function Home() {
  return (
    <section className="home__section">
      <Header />
      <Selos />
      <GridBicos />
    </section>
  );
}
