import React from "react";
import { Wrapper, Title } from "./LoginBox.styled";
import decoration from "../../../assets/icons/Decoration.svg";
import { LoginForm } from "../LoginForm/LoginForm";

export const LoginBox = () => {
  return (
    <Wrapper>
      <Title>Zaloguj się</Title>
      <img src={decoration} alt="decoration" />
      <LoginForm />
    </Wrapper>
  );
};
