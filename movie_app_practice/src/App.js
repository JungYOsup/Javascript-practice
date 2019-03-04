import React, { Component } from "react";

import A, { B } from "./Weather";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <B />
        <A />
      </div>
    );
  }
}
export default App;
