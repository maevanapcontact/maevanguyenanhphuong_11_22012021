import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/ErrorPage.css";

import Nav from "./Nav";
import Footer from "./Footer";

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
          <Link to="/maevanguyenanhphuong_11_22012021/" title="Homepage">
            Retourner sur la page d'accueil
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ErrorPage;
