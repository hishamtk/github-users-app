import { Card, Grid, Typography, makeStyles } from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: "90%",
    padding: "10px",
  },
  icon: {
    paddingRight: "15px",
  },
});

const Repos = ({ repos }) => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        {repos.map((repo) => {
          return (
            <Grid item xs={12} className={classes.card}>
              <Card key={repo.id}>
                <Typography variant="h5">
                  <FolderIcon />
                  {repo.name}
                </Typography>
                <Typography variant="h6">
                  {"description:  "}
                  {repo.description}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Repos;
