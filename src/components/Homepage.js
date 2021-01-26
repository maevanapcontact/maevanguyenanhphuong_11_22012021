import React, { Component } from "react";
import "../css/Homepage.css";
import { data } from "../data";

import Thumb from "./Thumb";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <header className="main-header">
          <Nav />
          <Banner
            content="Chez vous, partout et ailleurs"
            imgSrc="./images/homepage-banner.jpg"
            imgAlt="Landscape"
          />
        </header>
        <main className="main-content">
          {data.map((elt) => (
            <article key={elt.id} className="location-elt">
              <Thumb title={elt.title} src={elt.cover} />
            </article>
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
