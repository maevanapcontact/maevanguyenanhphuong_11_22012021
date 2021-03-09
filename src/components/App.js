import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../css/App.css";

import Nav from "./Nav";
import Footer from "./Footer";
import Homepage from "./Homepage";
import LocationPage from "./LocationPage";
import ErrorPage from "./ErrorPage";
import AboutPage from "./AboutPage";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route
            path="/location/:id"
            render={(props) => <LocationPage {...props} />}
          />
          <Route path="*" component={ErrorPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
