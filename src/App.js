import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Album from "./Components/Album";
import Navbar from "./Components/Layout/Navbar";

import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Footer from "./Components/Layout/Footer";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <Navbar />
      <Container className={classes.hero}>
        <Switch>
          <Route exact path="/github">
            <h1>Users</h1>
          </Route>
          <Route exact path="/github/about">
            <About />
          </Route>
          <Route exact path="/github/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>

      <Album />
      <Footer />
    </Fragment>
  );
};

export default App;
