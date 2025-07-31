import React from "react";
import "./MenuCards.css";

const meals = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        image: "null",
        description: "Classic Italian pasta with rich meat sauce.",
        price: "$12.99.",
    },
    {
        id: 2,
        name: "Banku and Tilapia",
        image: "null",
        description: "Hot banku and Tilapia with herbs, pepper and veggies.",
        price: "$10.50."
    },
    {
        id: 3,
        name: "Sushi Platter",
        image: "null",
        description: "Fresh sushi selection served with soy sauce.",
        price: "$18.00."
    },
];

const MenuCards = () => {
    return (
        <section className="menu">
            <h2> Our signature Dishes </h2>
            <div className="menu-grid">
                {meals.map((meal) => (
                    <div key={meal.id} className="menu-card">
                        <img src={meal.image} alt={meal.name} />
                        <h3>{meal.name}</h3>
                        <p>{meal.description}</p>
                        <span className="price">{meal.price}</span>
                        <button className="order-btn"> Order Now </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MenuCards;