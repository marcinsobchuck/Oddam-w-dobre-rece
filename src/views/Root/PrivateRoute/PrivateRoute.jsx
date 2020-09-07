import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import MyContext from "../../../context";

export const PrivateRoute = ({ component, path, exact, ...rest }) => {
  const { isLoggedIn } = useContext(MyContext);

  const condition = isLoggedIn;

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/logowanie" />
  );
};
