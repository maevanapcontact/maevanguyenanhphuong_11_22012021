import React, { Component } from "react";
import "../css/App.css";
// import { data } from "../data";

// import Homepage from "./Homepage";
// import LocationPage from "./LocationPage";
// import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <ErrorPage /> */}
        {/* <Homepage /> */}
        {/* <LocationPage locationData={data[0]} /> */}
        <AboutPage />
      </div>
    );
  }
}

export default App;
