import React, { Component } from "react";
import { Router } from "@reach/router";
import FrontendLayouts from "./frontend/Layouts";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <Router>
        <FrontendLayouts path="/" />
      </Router>
    );
  }
}

export default App;
