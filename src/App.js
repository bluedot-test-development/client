import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./pages/Home";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "./index";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <ErrorBoundary FallbackComponent={NotFound}>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
