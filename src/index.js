import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import Root from "./pages/root";
import apolloClient from "./apolloClient";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <Root />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
