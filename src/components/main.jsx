import React from "react";
import "../App.css";

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
          <div className="sale-down">
            <div className="sale-d-top">
              <div>
                <h1>Today's Sales</h1>
                <p>Sales Summery</p>
              </div>
              <div className="exp-button">
                <span class="material-symbols-outlined">upload</span>
                <p>Export</p>
              </div>
            </div>
            <div className="sale-d-bot">
              <div className="box box1">
                <div className="round1">
                  <span class="material-symbols-outlined">lab_profile</span>{" "}
                </div>
                <h4>$1k</h4>
                <h2>Total Sales</h2>
                <h3>+8% from yesterday</h3>
              </div>
              <div className="box box2">
                <div className="round2">
                  <span class="material-symbols-outlined">lab_profile</span>{" "}
                </div>
                <h4>$1k</h4>
                <h2>Total Sales</h2>
                <h3>+8% from yesterday</h3>
              </div>
              <div className="box box3">
                <div className="round3">
                  <span class="material-symbols-outlined">lab_profile</span>{" "}
                </div>
                <h4>$1k</h4>
                <h2>Total Sales</h2>
                <h3>+8% from yesterday</h3>
              </div>
              <div className="box box4">
                <div className="round4">
                  <span class="material-symbols-outlined">lab_profile</span>{" "}
                </div>
                <h4>$1k</h4>
                <h2>Total Sales</h2>
                <h3>+8% from yesterday</h3>
              </div>
            </div>
          </div>
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
