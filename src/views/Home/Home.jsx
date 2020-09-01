import React from "react";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { ThreeColumns } from "../../components/ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../../components/SimpleSteps/SimpleSteps";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <ThreeColumns />
      <SimpleSteps />
    </>
  );
};
