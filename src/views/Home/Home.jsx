import React from "react";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { ThreeColumns } from "../../components/ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../../components/SimpleSteps/SimpleSteps";
import { AboutUs } from "../../components/AboutUs/AboutUs";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
    </>
  );
};
