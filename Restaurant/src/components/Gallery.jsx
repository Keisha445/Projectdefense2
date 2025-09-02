import React from "react";
import "./Gallery.css";
import Jollof from "../assets/jollof.png";
import Fufu from "../assets/fufu.png";
import Pizza from "../assets/pizzamargherita.png";
import Grilledtilapia from "../assets/grilledtilapia.png";
import Bankuandokro from "../assets/bankuandokrostew.png";
import Kelewele from "../assets/kelewele.png";
import Sushideluxe from "../assets/sushideluxe.png";
import Crispypotatoes from "../assets/crispypotatoes.jpg";
import Yoghurt from "../assets/yoghurt.jpg";
import Yummy from "../assets/yummy.jpg";
import Tilapia2 from "../assets/tilapia2.webp";
import Bankuandpepper from "../assets/bankuandpepper.png";
import Pasta from "../assets/pasta.jpg";
import Pinkcream from "../assets/pinkcream.jpg";
import Banku from "../assets/banku.png";

const dishes = [
    {
        name: "Jollof Rice and Sausage Kebab.",
        img: Jollof,   
    },
    {
        name: "Fufu & Light Soup With Chicken.",
        img: Fufu,
    },
    {
        name: "Pizza Margherita.",
        img: Pizza,
    },
    {
        name: "Sushi Deluxe.",
        img: Sushideluxe,   
    },
    {
        name: "Grilled Tilapia.",
        img: Grilledtilapia,
    },
    {
        name: "Banku & Okro Stew.",
        img: Bankuandokro,
    },
    {
        name: "Kelewele.",
        img: Kelewele,
    },
    {
        name: "Crispy Potatoes.",
        img: Crispypotatoes,
    },
    {
        name: "Strawberry Yoghurt.",
        img: Yoghurt,
    },
    {
        name: "Vegan.",
        img: Yummy,
    },
    {
        name: "Tilapia- Vegan style.",
        img: Tilapia2,
    },
    {
        name:"Banku & Pepper With Tilapia.",
        img: Bankuandpepper,
    },
    {
        name: "Pasta.",
        img: Pasta,
    },
    {
        name: "Ice-Cream.",
        img: Pinkcream,
    },
    {
        name: "Banku & Okro Soup.",
        img: Banku, 
    },
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2>Our Special Dishes</h2>
            <p>Explore our delicious local & exotic meals</p>
            <div className="gallery-grid">
                {dishes.map((dish, index) => (
                    <div className="gallery-card" key={index}>
                        {dish.img ? (
                            <img src={dish.img} alt={dish.name} />
                        ) : (
                            <div className="placeholder">No Image</div> // ✅ fallback
                        )}
                        <h4>{dish.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;