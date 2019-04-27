import React, { Component } from "react";
import { Router } from "@reach/router";
import Home from "./frontend/Home";
import FrontendLayouts from "./frontend/Layouts";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Router>
        <FrontendLayouts path="/">
          <Home path="/" />
        </FrontendLayouts>
      </Router>
    );
  }
}

export default App;
