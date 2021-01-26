import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../css/App.css";
import { data } from "../data";

import Homepage from "./Homepage";
import LocationPage from "./LocationPage";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Homepage} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/location"
          render={() => <LocationPage locationData={data[0]} />}
        />
      </div>
    );
  }
}

export default App;
