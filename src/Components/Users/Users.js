import { Container, Grid, makeStyles } from "@material-ui/core";

import { useEffect } from "react";

import Spinner from "../Layout/Spinner";
import Search from "./Search";
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
    //eslint-disable-next-line
  }, []);



  return (
    <div>
      <Search searchUsers={props.searchUsers} />
      {props.loading ? (
        <Spinner />
      ) : (
        <Container className={classes.cardGrid}>
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
      )}
    </div>
  );
};

export default Users;
