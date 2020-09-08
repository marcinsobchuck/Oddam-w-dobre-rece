import React from "react";
import { AuthProvider } from "../../context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import theme from "../../theme/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Form } from "../Form/Form";
import { LoginView } from "../LoginView/LoginView";
import { LogoutView } from "../LogoutView/LogoutView";
import { RegisterView } from "../RegisterView/RegisterView";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/oddaj-rzeczy" component={Form} />
            <Route path="/logowanie" component={LoginView} />
            <Route path="/rejestracja" component={RegisterView} />
            <Route path="/wylogowano" component={LogoutView} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
