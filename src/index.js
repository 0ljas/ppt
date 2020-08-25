import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://35.228.168.161:4100/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <CssBaseline />
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
