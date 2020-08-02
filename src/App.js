import React from "react";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <HomePage />
      <NavBar />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;
