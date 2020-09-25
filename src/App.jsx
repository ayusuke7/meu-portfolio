import React from "react";
import routes from "./routes";
import store from "./store";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";

import history from "./utils/history";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/login" />
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
