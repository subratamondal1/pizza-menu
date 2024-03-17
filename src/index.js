// the module name need to be exactly "index.js" because the webpack bundler expects an entry point module called "index.js"

import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App(params) {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header(params) {
  return (
    <header className="header">
      <h1>Fast React Pizza & Co.</h1>
    </header>
  );
}

function Menu(params) {
  const pizzas = pizzaData;
  const numPizza = pizzas.length > 0;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {numPizza ? <Order /> : <p>We're Currently out of stock :(</p>}
    </main>
  );
}

function Order(params) {
  return (
    <>
      <p>Authentic Italian Cuisine, 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            pizzaObject={pizza}
            key={pizza.name}
          />
        ))}
      </ul>
    </>
  );
}
function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img
        src={props.pizzaObject.photoName}
        alt="Pizza Prosciutto"
      />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.soldOut ? "SOLD OUT" : props.pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer(params) {
  const hour = new Date().getHours();
  const openingHour = 9;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  return (
    <footer className="footer">
      <div className="order">
        <p>We're Currently Open untill {closingHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);
