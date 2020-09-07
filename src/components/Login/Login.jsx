import React from "react";
import { HomeHeaderNavigation } from "../HomeHeader/HomeHeaderNavigation/HomeHeaderNavigation";
import { Wrapper } from "./Login.styled";
import { LoginBox } from "./LoginBox/LoginBox";

export const Login = () => {
  return (
    <Wrapper>
      <HomeHeaderNavigation />
      <LoginBox />
    </Wrapper>
  );
};
