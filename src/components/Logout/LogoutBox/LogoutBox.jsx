import React from "react";
import { Wrapper, Title } from "../../Login/LoginBox/LoginBox.styled";
import decoration from "../../../assets/icons/Decoration.svg";
import { Button } from "../../Login/LoginForm/LoginForm.styled";
import { Link } from "react-router-dom";

export const LogoutBox = () => {
  return (
    <Wrapper>
      <Title>Wylogowanie nastąpiło pomyślnie!</Title>
      <img src={decoration} alt="decoration" />
      <Link to="/">
        <Button logout login>
          Strona główna
        </Button>
      </Link>
    </Wrapper>
  );
};
