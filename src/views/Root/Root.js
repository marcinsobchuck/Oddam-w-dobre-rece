import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../Home/Home";
import { Form } from "../Form/Form";
import { Login } from "../Login/Login";
import { Logout } from "../Logout/Logout";
import { Register } from "../Register/Register";
import { Tabs } from "../../components/Tabs/Tabs";

const Root = () => {
  return (
    <BrowserRouter>
      <>
        <Tabs />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/oddaj-rzeczy" component={Form} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={Logout} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Root;
