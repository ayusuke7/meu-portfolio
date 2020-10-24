import React from "react";

import { Provider } from "react-redux";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Header, Footer } from "./components";
import { ThemeProvider } from "@material-ui/core";

import RouteWrapper from "./routes";

import store from "./store";
import routes from "./routes/routes";
import history from "./utils/history";
import AppTheme from "./theme";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <ThemeProvider theme={AppTheme}>
          <Header />
          <Switch>
            <Redirect exact from="/" to="/login" />
            {routes.map((route) => (
              <RouteWrapper key={route.path} {...route} />
            ))}
          </Switch>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}
