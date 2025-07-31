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
                        <option value=""> Select a meal </option>
                        <option value="spaghetti"> Spaghetti Bolognese </option>
                        <option value="banku"> Banku and Tilapia </option>
                        <option value="sushi"> Sushi Platter </option>
                    </select>
                    <textarea placeholder="Any special request?" rows="3"></textarea>
                    <button type="submit"> Order Now </button>
                </form>
            </div>
        </section>
    );
};

export default Order;