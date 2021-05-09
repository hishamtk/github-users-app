import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

import GitHubIcon from "@material-ui/icons/GitHub";


const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1, 1.5),
    fontSize: theme.spacing(2.5),
    color: "white",
    textDecoration: "none",
  },
  icon: {
    marginRight: theme.spacing(2),
  },

  topbar: { flex: 1 },
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
          <Link to="/github" className={classes.link}>
            <GitHubIcon className={classes.icon} />
            Github App
          </Link>
        </Typography>
        <nav>
          <Link to="/github/about" className={classes.link}>
            About
          </Link>

          <Link to="/github/contact" className={classes.link}>
            Contact
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
