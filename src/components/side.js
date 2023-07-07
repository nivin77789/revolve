import React from "react";
import "../App.css";

function Side() {
  return (
    <div className="nav">
      <div className="dash bord">
        <span class="material-symbols-outlined">dashboard</span>
        <h1>Dashboard</h1>
      </div>
      <button className="dash lead">
        <span class="material-symbols-outlined">leaderboard</span>
        <h1>Leaderboard</h1>
      </button>
      <div className="dash fore">
        <span class="material-symbols-outlined">storm</span>
        <h1>Forecast</h1>
      </div>
      <div className="dash top">
        <span class="material-symbols-outlined">local_mall</span>
        <h1>Top products</h1>
      </div>
      <div className="dash sales">
        <span class="material-symbols-outlined">finance</span>
        <h1>Sales Report</h1>
      </div>
      <div className="dash invent">
        <span class="material-symbols-outlined">inventory</span>
        <h1>Inventory</h1>
      </div>
      <div className="dash order">
        <span class="material-symbols-outlined">shopping_cart</span>
        <h1>Orders</h1>
      </div>
      <div className="dash cust">
        <span class="material-symbols-outlined">lab_profile</span>
        <h1>Customer Report</h1>
      </div>
      <div className="dash pay">
        <span class="material-symbols-outlined">credit_card</span>
        <h1>Payment</h1>
      </div>
      <div className="dash dark">
        <span class="material-symbols-outlined">nightlight</span>
        <h1>Dark mode</h1>
      </div>
      <div className="dash set">
        <span class="material-symbols-outlined">settings</span>
        <h1>settings</h1>
      </div>
      <div className="sign">
        <span class="material-symbols-outlined">logout</span>
        <h1>sign out</h1>
      </div>
    </div>
  );
}

export default Side;
