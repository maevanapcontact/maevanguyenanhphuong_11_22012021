import React, { Component } from "react";
import Tag from "./Tag";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Tag content="tag-name" />
      </div>
    );
  }
}

export default App;
