import React from "react";
import routes from "./routes";
import store from "./store";

import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>
        <Switch>
          <Redirect exact to="/home" from="/" />
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
