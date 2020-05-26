import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

// import Definitions from "./pages/Definitions";
// import Library from "./pages/Library";
// import WebSearch from "./pages/WebSearch";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Main />

          {/* <Route exact path="/main" component={Main} />
          <Route exact path="/definitions" component={Definitions} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/websearch" component={WebSearch} />  */}
        </div>
      </Router>
    );
  }
}

export default App;
