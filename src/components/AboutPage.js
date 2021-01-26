import React, { Component } from "react";
import "../css/AboutPage.css";
import { about } from "../data";

import Nav from "./Nav";
import Banner from "./Banner";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

class AboutPage extends Component {
  render() {
    return (
      <div className="about">
        <header>
          <Nav />
          <Banner imgSrc="./images/about-banner.jpg" imgAlt="Landscape" />
        </header>
        <main>
          {about.map((elt) => (
            <Dropdown key={elt.id} title={elt.title} content={elt.content} />
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
