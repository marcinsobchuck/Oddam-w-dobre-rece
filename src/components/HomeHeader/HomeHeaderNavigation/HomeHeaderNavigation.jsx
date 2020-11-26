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
import { AuthContext } from "../../../context";

export const HomeHeaderNavigation = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <NavigationWrapper>
      {currentUser ? (
        <Navigation>
          <List>
            <Welcome>Cześć {currentUser.email}</Welcome>
            <ListItem yellowBorder>
              <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
            </ListItem>
            <ListItem>
              <Link to="/wylogowano" onClick={logOut}>
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
            {currentUser ? (
              <Link to="/">O co chodzi?</Link>
            ) : (
              <LinkScroll
                to="simple_Steps"
                smooth
                duration={1000}
                offset={-120}
              >
                O co chodzi?
              </LinkScroll>
            )}
          </ListItem>
          <ListItem menuListItem>
            {currentUser ? (
              <Link to="/">O nas</Link>
            ) : (
              <LinkScroll to="about_Us" smooth duration={1000}>
                O nas
              </LinkScroll>
            )}
          </ListItem>
          <ListItem menuListItem>
            {currentUser ? (
              <Link to="/">Fundacja i organizacje</Link>
            ) : (
              <LinkScroll to="help" smooth duration={1000} offset={70}>
                Fundacja i organizacje
              </LinkScroll>
            )}
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
