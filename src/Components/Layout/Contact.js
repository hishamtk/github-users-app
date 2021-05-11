import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import GitHub from "@material-ui/icons/GitHub";
import { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(1),
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Contact Page
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Connect with me on
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button
              href="https://github.com/hishamtk"
              variant="contained"
              color="primary"
            >
              <GitHub className={classes.icons} />
              GitHub
            </Button>
          </Grid>
          <Grid item>
            <Button
              href="https://www.linkedin.com/in/hishamtk/"
              variant="outlined"
              
              color="primary"
            >
              <LinkedIn className={classes.icons} />
              Linked In
            </Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Contact;
