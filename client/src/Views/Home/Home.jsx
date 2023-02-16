import React from "react";
import Cards from "../../Components/Cards/Cards";
import BarFilters from "../../Components/Bar_Filters/Bar_Filters";
import "./Home.css";


export default function Home() {


  return (
    <>
      <div className="contenedorhome">
        <div className="bar">
        <BarFilters/>
        </div>
        <div className="container_cards">
          <Cards />
        </div>
      </div>
    </>
  );
}
