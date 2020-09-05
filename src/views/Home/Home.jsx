import React from "react";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { ThreeColumns } from "../../components/ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../../components/SimpleSteps/SimpleSteps";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Help } from "../../components/Help/Help";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <ThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <Help />
      <Contact />
    </>
  );
};
