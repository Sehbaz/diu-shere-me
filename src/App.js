import React from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-heading">DiuSeherMe</h1>
      </header>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
