import React from "react";
import { Container, Typography, useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import SimplePaper from "./components/extends/SimplePaper";

const useStyles = makeStyles(() => ({
  paperStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    minHeight: "100vh",
    backgroundImage: "url(/images/mainBg3.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const classes = useStyles();
  const scrollTrigger = useScrollTrigger();

  return (
    <Container maxWidth="xl" disableGutters>
      <SimplePaper className={classes.paperStyle}>
        <SearchBar hideCondition={scrollTrigger} />
      </SimplePaper>
      <NavBar />

      <Typography variant="h6" style={{ marginTop: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
      <Typography variant="h5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
      <Typography variant="h4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
      <Typography variant="h3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
      <Typography variant="h2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
      <Typography variant="h1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem
        voluptatem sapiente? Dolore laudantium consectetur blanditiis aliquid
        tempore, nemo quam corrupti similique odit voluptas obcaecati id rerum
        fugiat minus ut iure quo alias commodi, aspernatur non voluptates a
        totam temporibus?
      </Typography>
    </Container>
  );
};

export default App;
