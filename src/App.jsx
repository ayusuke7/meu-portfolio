import React from "react";

import { Provider } from "react-redux";
import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
import { Header, Footer } from "./components";
// import RouteWrapper from "./routes";

import store from "./store";
import routes from "./routes/routes";
import history from "./utils/history";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/perfil" />
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
