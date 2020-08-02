import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimplePaper from "./extends/SimplePaper";
import SearchBar from "./SearchBar";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url(/images/bg-main.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  main: {
    marginTop: `${theme.spacing(10)}px`,
    padding: `0 ${theme.spacing(8)}px`,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <SimplePaper className={classes.root}>
      <Grid container className={classes.main} justify="flex-end">
        <Grid item container justify="center" xs={4}>
          <Login />
        </Grid>
      </Grid>
      <SearchBar />
    </SimplePaper>
  );
};

export default HomePage;
