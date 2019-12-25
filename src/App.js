import React from "react";
import sea from "./images/sea.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sea} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <h1>DiuShereMe</h1>
      </section>
    </div>
  );
}

export default App;
