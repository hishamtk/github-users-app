import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";

import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";

import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";

import { Container, CssBaseline, makeStyles } from "@material-ui/core";

import Footer from "./Components/Layout/Footer";
import axios from "axios";

import Profile from "./Components/Users/Profile";

import AlertItem from "./Components/Layout/AlertItem";

const useStyles = makeStyles((theme) => ({
  hero: {
    padding: theme.spacing(8, 0, 6),
    minHeight: "75vh", // to set the footer to bottom
  },
}));

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  
  
  
  const [alert, setAlert] = useState(null);



  const getAllusers = async () => {
    try {
      setLoading(true);
      let { data } = await axios.get("https://api.github.com/users");
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error on Api call", error);
    }
  };

  const getUserAndRepo = async (user) => {
    try {
      setLoading(true);

      let { data } = await axios.get(`https://api.github.com/users/${user}`);

      setUser(data);
      let res = await axios.get(`https://api.github.com/users/${user}/repos`);
      setRepos(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  const searchUsers = async (text) => {
    try {
      if (text === "") {
        return handleAlert("Search should not be empty", "error");
      }

      setLoading(false);
      let { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(data.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <Navbar />

      <Container className={classes.hero} maxWidth="lg">
        <AlertItem alert={alert} />
        <Switch>
          <Route exact path="/github">
            <Users
              getAllusers={getAllusers}
              searchUsers={searchUsers}
              users={users}
              loading={loading}
              alert={alert}
              handleAlert={handleAlert}
            />
          </Route>
          <Route exact path="/github/about">
            <About />
          </Route>
          <Route exact path="/github/contact">
            <Contact />
          </Route>
          <Route
            exact
            path="/github/user/:userId"
            render={(props) => (
              <Profile
                loading={loading}
                getUserAndRepo={getUserAndRepo}
                user={user}
                repos={repos}
                {...props}
              />
            )}
          />
        </Switch>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default App;
