import React from "react";
import { HomeHeaderNavigation } from "../HomeHeader/HomeHeaderNavigation/HomeHeaderNavigation";
import { Wrapper } from "./Register.styled";
import { RegisterBox } from "./RegisterBox/RegisterBox";

export const Register = () => {
  return (
    <Wrapper>
      <HomeHeaderNavigation />
      <RegisterBox />
    </Wrapper>
  );
};
