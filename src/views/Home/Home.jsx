import React, { useContext, useEffect } from "react";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { ThreeColumns } from "../../components/ThreeColumns/ThreeColumns";
import { SimpleSteps } from "../../components/SimpleSteps/SimpleSteps";
import { AboutUs } from "../../components/AboutUs/AboutUs";
import { Help } from "../../components/Help/Help";
import { Contact } from "../../components/Contact/Contact";
import { AuthContext } from "../../context";

export const Home = () => {
  const { setActiveStep } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setActiveStep(1);
    }, 2000);
  }, [setActiveStep]);

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
