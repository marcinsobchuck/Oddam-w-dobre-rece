import React from "react";
import { HomeHeaderNavigation } from "./HomeHeaderNavigation/HomeHeaderNavigation";
import { HomeHeaderMain } from "./HomeHeaderMain/HomeHeaderMain";
import hero from "../../assets/images/Home-Hero-Image.jpg";
import laptopImage from "../../assets/images/Rack1.jpeg";

import {
  HeaderContainer,
  HomeHeaderWrapper,
  Hero,
  LaptopImage,
  ImageWrapper,
} from "./HomeHeader.styled";

export const HomeHeader = () => {
  return (
    <HeaderContainer id="start">
      <Hero src={hero} />
      <HomeHeaderWrapper>
        <HomeHeaderNavigation />
        <HomeHeaderMain />
        <ImageWrapper>
          <LaptopImage src={laptopImage} />
        </ImageWrapper>
      </HomeHeaderWrapper>
    </HeaderContainer>
  );
};
