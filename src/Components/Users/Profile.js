import React, { useEffect } from "react";
import Repos from "./Repos";

const useStyles = makeStyles((theme) => ({}));

const Profile = (props) => {
  const classes = useStyles();
  let { userId } = props.match.params;
  useEffect(() => {
    props.getUserAndRepos(userId);
  }, [userId]);

  return <></>;
};


export default Profile
