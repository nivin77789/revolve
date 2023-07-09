import React, { useState } from "react";
import "../App.css";
import "./side.css";
function Side() {
  const [txt, setTxt] = useState("Dark Mode");
  const [mod, setMod] = useState("nightlight");

  function LoginOnClick() {
    setTxt("Light Mode");
    setMod("light_mode");
  }
  return (
    <div className="nav">
      <button className="dash bord">
        <span class="material-symbols-outlined">dashboard</span>
        <h1>Dashboard</h1>
      </button>
      <button className="dash lead">
        <span class="material-symbols-outlined">leaderboard</span>
        <h1>Leaderboard</h1>
      </button>
      <button className="dash fore">
        <span class="material-symbols-outlined">storm</span>
        <h1>Forecast</h1>
      </button>
      <button className="dash top">
        <span class="material-symbols-outlined">local_mall</span>
        <h1>Top products</h1>
      </button>
      <button className="dash sales">
        <span class="material-symbols-outlined">finance</span>
        <h1>Sales Report</h1>
      </button>
      <button className="dash invent">
        <span class="material-symbols-outlined">inventory</span>
        <h1>Inventory</h1>
      </button>
      <button className="dash order">
        <span class="material-symbols-outlined">shopping_cart</span>
        <h1>Orders</h1>
      </button>
      <button className="dash cust">
        <span class="material-symbols-outlined">lab_profile</span>
        <h1>Customer Report</h1>
      </button>
      <button className="dash pay">
        <span class="material-symbols-outlined">credit_card</span>
        <h1>Payment</h1>
      </button>
      <button className="dash dark" onClick={LoginOnClick}>
        <span class="material-symbols-outlined">{mod}</span>
        <h1>{txt}</h1>
      </button>
      <button className="dash set">
        <span class="material-symbols-outlined">settings</span>
        <h1>settings</h1>
      </button>
      <button className="sign">
        <span class="material-symbols-outlined">logout</span>
        <h1>sign out</h1>
      </button>
    </div>
  );
}

export default Side;
