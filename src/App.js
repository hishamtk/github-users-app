import React, { Component, Fragment } from "react";

import Album from "./Components/Album";
import Navbar from "./Components/Layout/Navbar";

import { CssBaseline } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <CssBaseline />

        <Navbar />
        <Album />
      </Fragment>
    );
  }
}

export default App;
