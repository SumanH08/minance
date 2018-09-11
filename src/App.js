import React, { Component } from "react";
import Wrapper from "./Components/Wrapper.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to graphs</h1>
        </header>
        <Wrapper />
      </div>
    );
  }
}

export default App;
