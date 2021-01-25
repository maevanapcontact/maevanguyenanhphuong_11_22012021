import React, { Component } from "react";
import "../css/App.css";
import { data } from "../data";

import Gallery from "./Gallery";
import Host from "./Host";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Gallery images={data[0].pictures} />
        <Host name={data[0].host.name} img={data[0].host.picture} />
      </div>
    );
  }
}

export default App;
