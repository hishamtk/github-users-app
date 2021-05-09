import { Typography } from "@material-ui/core";
import { Fragment } from "react";

const Contact = () => {

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
        This is a Contact us page
      </Typography>
    </Fragment>
  );
};

export default Contact;
