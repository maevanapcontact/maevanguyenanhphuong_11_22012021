import React, { Component } from "react";
import "../css/ErrorPage.css";

import Nav from "./Nav";

class ErrorPage extends Component {
  render() {
    return (
      <div className="homepage">
        <header className="error-header">
          <Nav />
        </header>
        <main className="error-main">
          <span className="error">404</span>
          <span className="error-tagline">
            Oops! La page que vous demandez n'existe pas.
          </span>
          <a href="index.html" title="Homepage">
            Retourner sur la page d'accueil
          </a>
        </main>
      </div>
    );
  }
}

export default ErrorPage;
