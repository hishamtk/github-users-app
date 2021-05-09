import { Container, Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";

import UserItem from "./UserItem";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Users = (props) => {
  const classes = useStyles();
  useEffect(() => {
    props.getAllusers();
  });

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            login={user.login}
            avatar_url={user.avatar_url}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Users;