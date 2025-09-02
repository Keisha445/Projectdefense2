import React, {useState} from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import MenuCards from "./components/MenuCards";
import Order from "./components/Order";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
    return (
      <>
        <Navbar /> 
        <Hero />
        <MenuCards />
        <Order />
        <Gallery />
        <Footer />
      </>
    );
}

export default App;