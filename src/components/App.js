import React, { Component } from "react";
import Tag from "./Tag";
import Thumb from "./Thumb";
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
      </div>
    );
  }
}

export default App;
