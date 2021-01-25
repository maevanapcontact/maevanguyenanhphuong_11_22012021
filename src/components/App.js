import React, { Component } from "react";
import "../css/App.css";
import { data } from "../data";

import Gallery from "./Gallery";
import Host from "./Host";
import Rate from "./Rate";
import Dropdown from "./Dropdown";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Gallery images={data[0].pictures} />
        <Host name={data[0].host.name} img={data[0].host.picture} />
        <Rate fill="4" />
        <Dropdown title="Description" content={data[0].equipments} />
      </div>
    );
  }
}

export default App;
