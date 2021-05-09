import { Typography } from "@material-ui/core";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
    
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        About Page
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        This is a react application made from scratch using Material UI and
        Create react app. Api Used in this project is api.github.com
      </Typography>
    </Fragment>
  );
};

export default About;
