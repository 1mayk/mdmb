import React from "react";
import "./home.css";
import selos from '../../assets/selos.png'
import Header from "../../components/Header/Header";
import Selos from "../../components/Selos/Selos";
import GridBicos from "../../components/GridBicos/GridBicos";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <section className="home__section">
      <Header />
      <div className="selos">
        <img src={selos} alt="selos icon" />
      </div>
      <Selos />
      <GridBicos />
      <Footer />
    </section>
  );
}
