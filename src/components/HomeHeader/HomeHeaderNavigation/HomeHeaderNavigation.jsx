import React, { useContext, useState, useEffect } from "react";

import {
  NavigationWrapper,
  Navigation,
  List,
  Welcome,
} from "./HomeHeaderNavigation.styled";
import { Hamburger } from "./Hamburger";

import { ListItem } from "./ListItem";
import { AuthContext } from "../../../context";
import { useLocation } from "react-router-dom";

export const HomeHeaderNavigation = () => {
  const { currentUser, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  const shouldRedirect =
    pathname === "/oddaj-rzeczy" ||
    pathname === "/logowanie" ||
    pathname === "/rejestracja" ||
    pathname === "/wylogowano";

  const shouldContactRedirect =
    pathname === "/logowanie" ||
    pathname === "/rejestracja" ||
    pathname === "/wylogowano";

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationWrapper>
      {currentUser ? (
        <Navigation>
          <List>
            <Welcome>Cześć {currentUser.email}</Welcome>

            <ListItem
              name="Oddaj rzeczy"
              shouldRedirect
              page="/oddaj-rzeczy"
              section="start"
              hasYellowBorder
            />

            <ListItem
              name="Wyloguj"
              shouldRedirect
              page="/wylogowano"
              onClick={logOut}
            />
          </List>
        </Navigation>
      ) : (
        <Navigation>
          <List>
            <ListItem name="Zaloguj" shouldRedirect page="/logowanie" />

            <ListItem
              name="Załóż konto"
              shouldRedirect
              page="/rejestracja"
              hasYellowBorder
            />
          </List>
        </Navigation>
      )}
      {/* <Hamburger onClick={handleClick} /> */}
      <Navigation menu>
        <List isSideMenu>
          <ListItem
            name="Start"
            shouldRedirect={shouldRedirect}
            section="start"
            page="/"
            isMenuListItem
          />
          <ListItem
            name="O co chodzi?"
            shouldRedirect={shouldRedirect}
            section="simple_Steps"
            page="/"
            isMenuListItem
          />
          <ListItem
            name="O nas"
            shouldRedirect={shouldRedirect}
            section="about_Us"
            page="/"
            isMenuListItem
          />
          <ListItem
            name="Fundacje i organizacje"
            shouldRedirect={shouldRedirect}
            section="help"
            page="/"
            isMenuListItem
          />

          <ListItem
            name="Kontakt"
            shouldRedirect={shouldContactRedirect}
            section="contact"
            isMenuListItem
            page="/"
          />
        </List>
      </Navigation>
    </NavigationWrapper>
  );
};
