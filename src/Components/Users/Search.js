import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Search = ({ searchUsers }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    text: "",
  });

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers(formData.text);
  };

  return (
    <div>
      <Container maxWidth="xs">
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            id="text"
            value={formData.text}
            placeholder="Search Users"
            name="text"
            onChange={handleFormData}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            size="medium"
            color="primary"
            variant="contained"
            className={classes.submit}
          >
            Search
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Search;
