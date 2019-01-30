import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  /*Sets state to friends array*/
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("CDM is running");
  }
  render() {
    return (
      <div className="App">
        <h1>Friends list</h1>
      </div>
    );
  }
}

export default App;
