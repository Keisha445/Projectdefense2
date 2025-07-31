import React, {useState} from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import MenuCards from "./components/MenuCards";
import Order from "./components/Order";

function App() {
    return (
      <>
        <Navbar /> 
        <Hero />
        <MenuCards />
        <Order />
      </>
    );
}

export default App;