import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import Root from "./pages/root";
import apolloClient from "./apolloClient";
import "simplebar/src/simplebar.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
