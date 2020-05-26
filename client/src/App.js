import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />



      </div>
    );
  }
}

export default App;