import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import theme from "../../theme/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Form } from "../Form/Form";
import { LoginView } from "../LoginView/LoginView";
import { LogoutView } from "../LogoutView/LogoutView";
import { RegisterView } from "../RegisterView/RegisterView";

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oddaj-rzeczy" component={Form} />
          <Route path="/logowanie" component={LoginView} />
          <Route path="/rejestracja" component={RegisterView} />
          <Route path="/wylogowano" component={LogoutView} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
