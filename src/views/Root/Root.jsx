import React, { useState } from "react";
import MyContext from "../../context";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <MyContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/oddaj-rzeczy" component={Form} />
            <Route path="/logowanie" component={LoginView} />
            <Route path="/rejestracja" component={RegisterView} />
            <Route path="/wylogowano" component={LogoutView} />
          </Switch>
        </MyContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Root;
