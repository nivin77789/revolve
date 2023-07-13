import React, { useState } from "react";

import "../App.css";
import "./side.css";
function Side() {
  const [txt, setTxt] = useState("Dark Mode");
  const [mod, setMod] = useState("nightlight");
  const [isButtonOn, setButtonOn] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [color, setColor] = useState("#737791");
  const [width, setWidth] = useState("260px");
  const [isActive, setActive] = useState(true);
  const [margin, setMargin] = useState("0px 0px 0px 0px");

  function minimize() {
    setActive(!isActive);
    if (isActive) {
      setWidth("60px");
      setMargin("0px 0px 0px 70px");
    } else {
      setWidth("260px");
      setMargin("0px 0px 0px 0px");
    }
  }

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
    <div className="nav" style={{ backgroundColor, color, width }}>
      <div className="menu-icon" onClick={minimize} style={{ backgroundColor }}>
        <span class="material-symbols-outlined menu-icon">menu</span>
      </div>
      <button className="dash bord" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          dashboard
        </span>
        {isActive ? <h1>Dashboard</h1> : null}
      </button>
      <button className="dash lead" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          leaderboard
        </span>
        {isActive ? <h1>Leaderboard</h1> : null}
      </button>
      <button className="dash fore" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          storm
        </span>
        {isActive ? <h1>Forecast</h1> : null}
      </button>
      <button className="dash top" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          local_mall
        </span>
        {isActive ? <h1>Top products</h1> : null}
      </button>
      <button className="dash sales" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          finance
        </span>
        {isActive ? <h1>Sales Report</h1> : null}
      </button>
      <button className="dash invent" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          inventory
        </span>
        {isActive ? <h1>Inventory</h1> : null}
      </button>
      <button className="dash order" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          shopping_cart
        </span>
        {isActive ? <h1>Orders</h1> : null}
      </button>
      <button className="dash cust" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          lab_profile
        </span>
        {isActive ? <h1>Customer Report</h1> : null}
      </button>
      <button className="dash pay" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          credit_card
        </span>
        {isActive ? <h1>Payment</h1> : null}
      </button>
      <button
        className="dash dark"
        style={{ backgroundColor }}
        onClick={LoginOnClick}
      >
        <span class="material-symbols-outlined" style={{ margin }}>
          {mod}
        </span>
        {isActive ? <h1>{txt}</h1> : null}
      </button>
      <button className="dash set" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          settings
        </span>
        {isActive ? <h1>settings</h1> : null}
      </button>
      <button className="sign" style={{ backgroundColor }}>
        <span class="material-symbols-outlined" style={{ margin }}>
          logout
        </span>
        {isActive ? <h1>sign out</h1> : null}
      </button>
    </div>
  );
}

export default Side;
