import {
  AppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: theme.spacing(2.5),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  topbar: {
    flex: 1,
  },
  appbar: { padding: theme.spacing(0, 7) },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <Typography
          variant="h5"
          color="inherit"
          noWrap
          className={classes.topbar}
        >
          <GitHubIcon className={classes.icon} />
          Github App
        </Typography>
        <nav>
          <Link
            variant="button"
            color="inherit"
            href="#"
            className={classes.link}
          >
            About
          </Link>

          <Link
            variant="button"
            color="inherit"
            href="#"
            className={classes.link}
          >
            Contact
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
