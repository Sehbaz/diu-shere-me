import React from "react";
import sea from "./images/sea.png";
import "./App.css";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sea} className="App-logo" alt="logo" />
        <h1 className="App-heading">DiuSeherMe</h1>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
