import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import { Footer } from "./Footer";
import { listCards } from "./listCards.js";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <div className="container Contenido">
        <Jumbotron />
        <div className="row" id="cardContainer">
          {listCards.map((personaje, index) => (
            <Card key={index} {...personaje} />
          ))}
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
};

export default Home;
