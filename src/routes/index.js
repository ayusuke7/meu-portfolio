import React from "react";
import { Route, Redirect } from "react-router-dom";
import storage from "../utils/storage";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  path,
  ...rest
}) {
  const user = storage.getUser();
  const signed = Boolean(user);

  const redirect = ["/login", "/register"];

  if (redirect.includes(path) && signed) {
    return <Redirect to={`/perfil/${user?.username}`} />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} path={path} component={Component} />;
}
