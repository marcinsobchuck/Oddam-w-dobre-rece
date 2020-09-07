import React from "react";
import { HomeHeaderNavigation } from "../HomeHeader/HomeHeaderNavigation/HomeHeaderNavigation";
import { Wrapper } from "./Logout.styled";
import { LogoutBox } from "./LogoutBox/LogoutBox";

export const Logout = () => {
  return (
    <Wrapper>
      <HomeHeaderNavigation />
      <LogoutBox />
    </Wrapper>
  );
};
