import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
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
          <Typography gutterBottom variant="h5" component="h2">
            {props.login}
          </Typography>
          <Typography>link to profile page</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserItem;
