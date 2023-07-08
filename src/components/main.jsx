import React from "react";
import "../App.css";
import Sales from "./sales";
import "./main.css";
function Main() {
  return (
    <div className="main">
      <div className="tope">
        <div className="sale">
          <div className="sale-top">
            <div className="sale-left">
              <h1>Dashboard overview</h1>
              <div className="print-button">
                <span class="material-symbols-outlined">print</span>{" "}
                <p>Print</p>
              </div>
            </div>
            <div className="sale-right">
              <h1>Add your Data</h1>
              <p>(.csv file)</p>
              <div className="imp-button">
                <span class="material-symbols-outlined">download</span>

                <p>Import</p>
              </div>
            </div>
          </div>
          <Sales />
        </div>
        <div className="insight">
          <h1>Customer Insights</h1>
        </div>
      </div>
      <div className="mide">
        <div className="mid-left">
          <h1>Total Revenue</h1>
        </div>
        <div className="mid-center">
          <h1>Time Analysis</h1>
        </div>
        <div className="mid-right">
          <h1>Target vs Reality</h1>
        </div>
      </div>
      <div className="bot">
        <div className="bot-left">
          <h1>Top Products</h1>
        </div>
        <div className="bot-center">
          <h1>Sales by Region</h1>
        </div>
        <div className="bot-right">
          <h1>Loss Graph</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
