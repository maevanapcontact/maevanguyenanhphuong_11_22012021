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
          path="/maevanguyenanhphuong_11_22012021/"
          render={() => (
            <Homepage changeLocation={this.changeCurrentLocation} />
          )}
        />
        <Route
          path="/maevanguyenanhphuong_11_22012021/error"
          component={ErrorPage}
        />
        <Route
          path="/maevanguyenanhphuong_11_22012021/about"
          component={AboutPage}
        />
        <Route
          path="/maevanguyenanhphuong_11_22012021/location"
          render={() => <LocationPage locationData={locationData} />}
        />
      </div>
    );
  }
}

export default App;
