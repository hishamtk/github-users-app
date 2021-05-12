import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import BookIcon from "@material-ui/icons/Book";
import MailIcon from "@material-ui/icons/Mail";
import GradeIcon from "@material-ui/icons/Grade";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import Repos from "./Repos";
import Spinner from "../Layout/Spinner";
import { GitHub } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: theme.spacing(2),
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
    marginRight: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#52b788",
  },
  button: {
    margin: theme.spacing(0, 2, 4, 12),
  },
  iconFollow: {
    marginRight: theme.spacing(5),
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
          <Container maxWidth="lg">
            <Button
              variant="contained"
              className={classes.button}
              component={RouterLink}
              to="/github"
            >
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
                <Card raised className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image={user.avatar_url}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      className={classes.noPad}
                      variant="h5"
                      align="center"
                      component="h5"
                      color="textPrimary"
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      align="start"
                      variant="subtitle1"
                      color="secondary"
                    >
                      <ContactMailIcon className={classes.iconProfile} />

                      {user.bio}
                    </Typography>
                    <Typography
                      align="start"
                      variant="subtitle1"
                      color="secondary"
                    >
                      <BookIcon className={classes.iconProfile} />

                      <a
                        href={user.blog}
                        className={classes.link}
                        rel="noreferer"
                      >
                        {user.blog}
                      </a>
                    </Typography>
                    <Typography
                      align="start"
                      variant="subtitle1"
                      color="secondary"
                    >
                      <MailIcon className={classes.iconProfile} />

                      {user.login}
                    </Typography>
                    <Typography
                      align="start"
                      variant="subtitle1"
                      color="secondary"
                    >
                      <GitHub className={classes.iconProfile} />

                      <a
                        href={user.html_url}
                        className={classes.link}
                        rel="noreferer"
                      >
                        GitHub Profile
                      </a>
                    </Typography>
                    <CardContent>
                      <Typography align="start" variant="h4" color="secondary">
                        <Typography
                          className={classes.iconProfile}
                          variant="h6"
                          display="inline"
                        >
                          Hirable:
                        </Typography>

                        {user.hireable ? (
                          <CheckCircleIcon />
                        ) : (
                          <HighlightOffIcon />
                        )}
                      </Typography>
                    </CardContent>
                  </CardContent>
                </Card>

                <Card raised>
                  <CardContent>
                    <Typography align="justify" variant="h6" color="secondary">
                      <GradeIcon className={classes.iconFollow} />
                      Followers :{user.followers}
                    </Typography>
                    <Typography align="justify" variant="h6" color="secondary">
                      <GradeIcon className={classes.iconFollow} />
                      Following :{user.following}
                    </Typography>
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
          </Container>
        </div>
      )}
    </>
  );
};

export default Profile;
