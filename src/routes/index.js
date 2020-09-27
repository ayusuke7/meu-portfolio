import React from "react";
import { Route, Redirect } from "react-router-dom";
import storage from "../utils/storage";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const user = storage.getUser();
  const signed = Boolean(user);

  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */

  if (!isPrivate && signed) {
    return <Redirect to={`/perfil/${user?.username}`} />;
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return <Route {...rest} component={Component} />;
}
