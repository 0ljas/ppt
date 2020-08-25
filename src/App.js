import React from "react";
import { Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_ME = gql`
  query me {
    me {
      firstName
      companyName
      shops {
        id
        address
      }
    }
  }
`;

const App = () => {
  const { data, loading } = useQuery(GET_ME);
  console.log("data", data, loading);
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
