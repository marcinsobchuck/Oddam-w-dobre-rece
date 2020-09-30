import React from "react";

import { HomeHeaderNavigation } from "../HomeHeader/HomeHeaderNavigation/HomeHeaderNavigation";
import { Contact } from "../Contact/Contact";
import hero from "../../assets/images/Form-Hero-Image.jpg";

import { Wrapper, HeaderSection, HeaderWrapper, Hero } from "./GiveForm.styled";
import { GiveFormMain } from "./GiveFormMain/GiveFormMain";
import { Form } from "./Form/Form";

export const GiveForm = () => {
  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <Hero src={hero} />
          <HeaderSection>
            <HomeHeaderNavigation />
            <GiveFormMain />
          </HeaderSection>
        </HeaderWrapper>
      </Wrapper>
      <Form />
      <Contact />
    </>
  );
};
