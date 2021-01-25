import React, { Component } from "react";
import "../css/App.css";
import { data } from "../data";

import LocationPage from "./LocationPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <LocationPage locationData={data[0]} />
      </div>
    );
  }
}

export default App;
