import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {
  NavigationWrapper,
  Navigation,
  List,
  ListItem,
  Welcome,
} from "./HomeHeaderNavigation.styled";
import MyContext from "../../../context";

export const HomeHeaderNavigation = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(MyContext);

  return (
    <NavigationWrapper>
      {isLoggedIn ? (
        <Navigation>
          <List>
            <Welcome>Cześć krzysztof@gmail.com</Welcome>
            <ListItem yellowBorder>
              <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setIsLoggedIn(false)} to="/wylogowano">
                Wyloguj
              </Link>
            </ListItem>
          </List>
        </Navigation>
      ) : (
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
      )}

      <Navigation menu>
        <List>
          <ListItem menuListItem>
            <Link to="/">Start</Link>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="simple_Steps" smooth duration={1000} offset={-120}>
              O co chodzi?
            </LinkScroll>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="about_Us" smooth duration={1000}>
              O nas
            </LinkScroll>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="help" smooth duration={1000} offset={70}>
              Fundacja i organizacje
            </LinkScroll>
          </ListItem>
          <ListItem menuListItem>
            <LinkScroll to="contact" smooth duration={1000}>
              Kontakt
            </LinkScroll>
          </ListItem>
        </List>
      </Navigation>
    </NavigationWrapper>
  );
};
