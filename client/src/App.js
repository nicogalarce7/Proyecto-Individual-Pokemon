import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Views/Home/Home";
import Details from "../src/Components/Details/Details";
import { useDispatch } from "react-redux";
import { apiAllTypes, getAllPokemon } from "./Redux/Petitions";
import Formulario from "./Components/Form/Formulario";
import Landingpage from "./Views/LandingPage/LandingPage";
import About from "./Views/About/About";
import Navbar from "./Views/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"

function App() {
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    getAllPokemon(dispatch);
    apiAllTypes(dispatch);
  }, [dispatch]);

  
  return (
    <>
    {pathname !== "/" && <Navbar/>}
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path="/Create" element={<Formulario/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
      {pathname !== "/" && <Footer/>}
    </>
  );
}

export default App;
