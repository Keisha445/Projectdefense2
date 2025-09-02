import React from "react";
import './Order.css';

const Order = () => {
    return (
        <section className="order-section">
            <div className="order-container">
                <h2> Place your order </h2>
                <p> Get your favorite meals delivered fresh & fast. </p>

                <form className="order-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <select required>
                        <option value="null"> Select a meal </option>
                        <option value="spaghetti"> Spaghetti Bolognese </option>
                        <option value="banku"> Banku and Tilapia </option>
                        <option value="sushi"> Sushi Deluxe </option>
                        <option value="jollof">Jollof Rice </option>
                        <option value="fufu">Fufu & Light Soup With Chicken </option>
                        <option value="pizza">Pizza Margherita </option>
                        <option value="grilledtilapia">Grilled Tilapia </option>
                        <option value="bankuandokrostew">Banku & Okro Stew </option>
                        <option value="kelewele">Kelewele </option>
                        <option value="crispypotatoes">Crispy Potatoes </option>
                        <option value="strawberryyoghurt">Strawberry Yoghurt </option>
                        <option value="bankuandpepper">Banku & Pepper With Tilapia </option>
                        <option value="pasta">Pasta </option>
                        <option value="ice-cream">Ice-Cream </option>
                        <option value="bankuandokro">Banku & Okro Soup </option>
                    </select>
                    <textarea placeholder="Any special request?" rows="3"></textarea>
                    <button type="submit"> Order Now </button>
                </form>
            </div>
        </section>
    );
};

export default Order;