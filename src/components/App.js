import React, { Component } from "react";
import "../css/App.css";

import Homepage from "./Homepage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Homepage />
      </div>
    );
  }
}

export default App;
