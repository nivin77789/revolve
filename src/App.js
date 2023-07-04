import "./App.css";
import Main from "./components/main";
import Side from "./components/side";
import Taskbar from "./components/taskbar";

function App() {
  return (
    <div className="App">
      <Taskbar />
      <div className="sub">
        <Side />
        <Main />
      </div>
    </div>
  );
}

export default App;
