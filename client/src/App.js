import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { data: [] };

  componentDidMount() {
    fetch("/api/main")
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Load test data from backend</p>
          {JSON.stringify(this.state.data)}
        </header>
      </div>
    );
  }
}

export default App;
