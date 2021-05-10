import { Button, Card, CardMedia, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
// import Repos from "./Repos";


import ContactMailIcon from "@material-ui/icons/ContactMail";

import CardContent from "@material-ui/core/CardContent";

import AcUnitIcon from "@material-ui/icons/AcUnit";


import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import Repos from "./Repos"



import { Link as RouterLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  icon: {
    paddingRight: "10px",
  },
  media: {
    height: 0,
    paddingTop: "65%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  noPad: {
    padding: 0,
  },
  iconProfile: {
    marginRight: "15px",
  },
}));

const Profile = (props) => {
  const classes = useStyles();
  let { userId } = props.match.params;
  console.log(userId);
  useEffect(() => {
    props.getUserAndRepo(userId);
    //eslint-disable-next-line
  }, []);

  const { user } = props;

  return (
    <>
      <div>
        <Button variant="contained" component={RouterLink} to="/github">
          <KeyboardBackspaceIcon className={classes.icon} />
          Back to Search
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={false} sm={1}></Grid>
          <Grid
            container
            item
            xs={10}
            sm={4}
            md={4}
            direction="column"
            alignContent="center"
          >
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={user.avatar_url}
                title="Paella dish"
              />
              <CardContent>
                <Typography
                  className={classes.noPad}
                  variant="h5"
                  component="h5"
                  color="textSecondary"
                >
                  {user.name}
                </Typography>
                <Typography variant="p">
                  <ContactMailIcon className={classes.iconProfile} />
                  {user.bio}
                </Typography>
                <Typography variant="p" component="h5">
                  <ContactMailIcon
                    fontSize="small"
                    className={classes.iconProfile}
                  />
                  {"  :  "}
                  {user.bio}
                </Typography>
                <Typography></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            container
            item
            xs={10}
            sm={6}
            md={6}
            justify="start"
            alignItems="center"
            direction="column"
          >
            <Typography gutterBottom variant="h4" color="textSecondary">
              <AcUnitIcon color="inherit" fontSize="large" className="iconProfile" />
              {user.public_repos} {"   public repos"}
            </Typography>
            <Repos repos={props.repos} />
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
