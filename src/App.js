import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="taskbar">
        <div className="logo">
          <img src="./logo.png" alt="Revolve"></img>
          <h1>Revolve</h1>
        </div>
        <div className="title">
          <h1>Hi Nivin,</h1>
        </div>
        <div className="search">
          <div className="input">
            <span class="material-symbols-outlined">search</span>
            <input placeholder="Search here..." className="inp"></input>
          </div>
        </div>
        <div className="lang">
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
        </div>
        <div className="profile"></div>
      </div>
      <div className="sub">
        <div className="nav">Dashboard</div>
        <div className="main">Main</div>
      </div>
    </div>
  );
}

export default App;
