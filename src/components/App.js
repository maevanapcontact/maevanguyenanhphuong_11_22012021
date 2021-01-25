import React, { Component } from "react";
import Tag from "./Tag";
import Thumb from "./Thumb";
import Banner from "./Banner";
import Nav from "./Nav";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Tag content="tag-name" />
        <Thumb
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          title="Appartement cosy"
        />
        <Banner
          content="Chez vous, partout et ailleurs"
          imgSrc="./images/homepage-banner.jpg"
          imgAlt="Landscape"
        />
        <Nav />
      </div>
    );
  }
}

export default App;
