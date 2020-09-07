import React from "react";
import { Wrapper, Title } from "./RegisterBox.styled";
import decoration from "../../../assets/icons/Decoration.svg";
import { RegisterForm } from "../RegisterForm/RegisterForm";

export const RegisterBox = () => {
  return (
    <Wrapper>
      <Title>Załóż konto</Title>
      <img src={decoration} alt="decoration" />
      <RegisterForm />
    </Wrapper>
  );
};
