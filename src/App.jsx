import React from "react";

import RouteWrapper from "./routes";
import routes from "./routes/routes";

import store from "./store";

import { Switch, BrowserRouter } from "react-router-dom";
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
          {routes.map((route) => (
            <RouteWrapper key={route.path} {...route} />
          ))}
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
