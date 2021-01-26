import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../css/App.css";
import { data } from "../data";

import Homepage from "./Homepage";
import LocationPage from "./LocationPage";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";

class App extends Component {
  state = {
    currentLocationId: data[0].id,
  };

  changeCurrentLocation = (newLocationId) => {
    this.setState({
      currentLocationId: newLocationId,
    });
  };

  render() {
    const locationData = data.find(
      (elt) => elt.id === this.state.currentLocationId
    );
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Homepage changeLocation={this.changeCurrentLocation} />
          )}
        />
        <Route path="/error" component={ErrorPage} />
        <Route path="/about" component={AboutPage} />
        <Route
          path="/location"
          render={() => <LocationPage locationData={locationData} />}
        />
      </div>
    );
  }
}

export default App;
