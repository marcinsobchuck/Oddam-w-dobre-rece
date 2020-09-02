import React from "react";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {
  NavigationWrapper,
  Navigation,
  List,
  ListItem,
} from "./HomeHeaderNavigation.styled";

export const HomeHeaderNavigation = () => {
  return (
    <NavigationWrapper>
      <Navigation>
        <List>
          <ListItem>
            <Link to="/logowanie">Zaloguj</Link>
          </ListItem>
          <ListItem yellowBorder>
            <Link to="/rejestracja">Załóż konto</Link>
          </ListItem>
        </List>
      </Navigation>
      <Navigation menu>
        <List>
          <ListItem menuListItem>
            <a href="#">Start</a>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="simple_Steps" smooth duration={1000}>
              O co chodzi?
            </LinkScroll>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="about_Us" smooth duration={1000}>
              O nas
            </LinkScroll>
          </ListItem>
          <ListItem menuListItem>
            <a href="#">Fundacja i organizacje</a>
          </ListItem>
          <ListItem menuListItem>
            <a href="#">Kontakt</a>
          </ListItem>
        </List>
      </Navigation>
    </NavigationWrapper>
  );
};
