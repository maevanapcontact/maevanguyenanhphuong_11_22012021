import React, { Component } from "react";
import "../css/App.css";
// import { data } from "../data";

import ErrorPage from "./ErrorPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorPage />
      </div>
    );
  }
}

export default App;
