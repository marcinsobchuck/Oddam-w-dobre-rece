import React from "react";
import { HomeHeaderNavigation } from "./HomeHeaderNavigation/HomeHeaderNavigation";
import { HomeHeaderMain } from "./HomeHeaderMain/HomeHeaderMain";
import hero from "../../assets/images/Home-Hero-Image.jpg";

import { HeaderContainer, Hero } from "./HomeHeader.styled";

export const HomeHeader = () => {
  return (
    <HeaderContainer>
      <Hero src={hero} />
      <section>
        <HomeHeaderNavigation />
        <HomeHeaderMain />
      </section>
    </HeaderContainer>
  );
};
