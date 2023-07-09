import React, { useState } from "react";
import "../App.css";
import "./side.css";
function Side() {
  const [txt, setTxt] = useState("Dark Mode");
  const [mod, setMod] = useState("nightlight");
  const [isButtonOn, setButtonOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("#737791");

  function LoginOnClick() {
    if (isButtonOn) {
      setBackgroundColor("#fff");
      setColor("#737791");
      setTxt("Dark Mode");
      setMod("nightlight");
    } else {
      setBackgroundColor("#303138");
      setColor("#FAFBFC");
      setTxt("Light Mode");
      setMod("light_mode");
    }

    setButtonOn(!isButtonOn);
  }
  return (
    <div className="nav" style={{ backgroundColor, color }}>
      <button className="dash bord" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">dashboard</span>
        <h1>Dashboard</h1>
      </button>
      <button className="dash lead" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">leaderboard</span>
        <h1>Leaderboard</h1>
      </button>
      <button className="dash fore" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">storm</span>
        <h1>Forecast</h1>
      </button>
      <button className="dash top" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">local_mall</span>
        <h1>Top products</h1>
      </button>
      <button className="dash sales" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">finance</span>
        <h1>Sales Report</h1>
      </button>
      <button className="dash invent" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">inventory</span>
        <h1>Inventory</h1>
      </button>
      <button className="dash order" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">shopping_cart</span>
        <h1>Orders</h1>
      </button>
      <button className="dash cust" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">lab_profile</span>
        <h1>Customer Report</h1>
      </button>
      <button className="dash pay" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">credit_card</span>
        <h1>Payment</h1>
      </button>
      <button
        className="dash dark"
        style={{ backgroundColor }}
        onClick={LoginOnClick}
      >
        <span class="material-symbols-outlined">{mod}</span>
        <h1>{txt}</h1>
      </button>
      <button className="dash set" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">settings</span>
        <h1>settings</h1>
      </button>
      <button className="sign" style={{ backgroundColor }}>
        <span class="material-symbols-outlined">logout</span>
        <h1>sign out</h1>
      </button>
    </div>
  );
}

export default Side;
