import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import Repos from "./Repos";
import Spinner from "../Layout/Spinner";

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
      {props.loading ? (
        <Spinner />
      ) : (
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
                <AcUnitIcon
                  color="inherit"
                  fontSize="large"
                  className="iconProfile"
                />
                {user.public_repos} {"   public repos"}
              </Typography>
              <Repos repos={props.repos} />
            </Grid>
            <Grid item xs={false} sm={1}></Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Profile;
