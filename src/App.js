import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="taskbar">
        <div className="logo">
          <img
            className="logo-img"
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="revolve"
          />
          <h1>Revolve</h1>
        </div>
        <div className="title">
          <h1>
            <span>Hi</span> Nivin,
          </h1>
        </div>
        <div className="search">
          <div className="input">
            <span class="material-symbols-outlined">search</span>
            <input placeholder="Search here..." className="inp"></input>
          </div>
        </div>
        <div className="lang">
          <img
            src="https://cdn.countryflags.com/thumbs/andorra/flag-round-250.png"
            alt="flag"
          ></img>
          <select name="countries" id="countries">
            <option
              value="ad"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag ad"
              data-title="Andorra"
            >
              Andorra
            </option>
            <option
              value="ae"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag ae"
              data-title="United Arab Emirates"
            >
              United Arab Emirates
            </option>
            <option
              value="af"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag af"
              data-title="Afghanistan"
            >
              Afghanistan
            </option>
            <option
              value="ag"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag ag"
              data-title="Antigua and Barbuda"
            >
              Antigua and Barbuda
            </option>
            <option
              value="ai"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag ai"
              data-title="Anguilla"
            >
              Anguilla
            </option>
            <option
              value="al"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag al"
              data-title="Albania"
            >
              Albania
            </option>
            <option
              value="am"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag am"
              data-title="Armenia"
            >
              Armenia
            </option>
            <option
              value="an"
              data-image="images/msdropdown/icons/blank.gif"
              data-imagecss="flag an"
              data-title="Netherlands Antilles"
            >
              Netherlands Antilles
            </option>
          </select>
          <div className="noti">
            <span class="material-symbols-outlined">notifications</span>
          </div>
        </div>
        <div className="profile">
          <div class="material">
            <span class="material-symbols-outlined">person</span>
          </div>
          <div className="usn">
            <h3>Username</h3>
            <p>Admin</p>
          </div>
        </div>
      </div>
      <div className="sub">
        <div className="nav">
          <div className="dash bord">
            <span class="material-symbols-outlined">dashboard</span>
            <h1>Dashboard</h1>
          </div>
          <div className="dash lead">
            <span class="material-symbols-outlined">leaderboard</span>
            <h1>Leaderboard</h1>
          </div>
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
        <div className="main">Main</div>
      </div>
    </div>
  );
}

export default App;
