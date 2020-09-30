import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../../context";

export const PrivateRoute = ({ component, path, exact, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  const condition = currentUser;

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/logowanie" />
  );
};
