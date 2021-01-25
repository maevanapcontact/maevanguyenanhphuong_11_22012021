import React, { Component } from "react";
import "../css/App.css";
import { data } from "../data";

import Gallery from "./Gallery";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Gallery images={data[0].pictures} />
      </div>
    );
  }
}

export default App;
