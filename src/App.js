import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="taskbar">
        <div className="logo">
          <img src="./logo.png" alt="Revolve"></img>
          <h1>Revolve</h1>
        </div>
        <div className="title"></div>
        <div className="search"></div>
        <div className="lang"></div>
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
