import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import PaginationDiv from "../Layout/PaginationDiv";

const useStyles = makeStyles((theme) => ({
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
  hover: {
    transition: "0.8s",
    "&:hover": {
      background: "#CFF2EE",
    },
  },
  icon: {
    marginRight: theme.spacing(4),
  },
  button: {
    textTransform: "none",
  },
  link: {
    textDecoration: "none",
  },
}));

const Repos = ({ repos }) => {
  const [pageRepos, setPageRepos] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pages, setPages] = useState(0);
  const perPage = 5;

  useEffect(() => {
    calcPages(repos, perPage);
  }, [repos]);

  useEffect(() => {
    const showRepo = () => {
      if (currPage < 1 || currPage > pages) {
        return;
      }
      setPageRepos(repos.slice((currPage - 1) * perPage, currPage * perPage));
    };
    showRepo(currPage);
  }, [currPage, pages, repos]);

  const calcPages = (arr, perPage) => {
    setPages(Math.ceil(arr.length / perPage));
  };

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
        {pageRepos.map((repo) => {
          return (
            <Grid key={repo.id} item xs={12} className={classes.card}>
              <a
                href={repo.html_url}
                rel="noreferrer"
                target="_blank"
                className={classes.link}
              >
                <Card className={classes.hover}>
                  <CardContent>
                    <Typography variant="h6" color="secondary">
                      <FolderIcon className={classes.icon} />
                      {repo.name}
                    </Typography>
                    <Typography variant="body1">
                      {"description:  "}
                      {repo.description}
                    </Typography>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          );
        })}
        <PaginationDiv
          pages={pages}
          currPage={currPage}
          setCurrPage={setCurrPage}
          total={repos.length}
        />
      </Grid>
    </>
  );
};

export default Repos;
