import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    transition: "1s",
    "&:hover": {
      background: "#CFF2EE",
    },
  },

  cardMedia: {
    borderRadius: "50%",
    width: "250px",
    height: "250px",
    margin: theme.spacing(0, "auto"),
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    background: "#354f52",
    color: "#fff",
  },
  link: {
    textDecoration: "none",
  },
}));

const UserItem = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={props.avatar_url}
          title={props.login}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h3" align="center" component="h2">
            {props.login}
          </Typography>
          <Typography align="center">
            <Link to={`/github/user/${props.login}`} className={classes.link}>
              <Button variant="contained" color="secondary">
                Github Profile
              </Button>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
