import React from "react";
import {
  SimpleStepsContainer,
  Title,
  StepsContainer,
  Step,
  StepsWrapper,
} from "./SimpleSteps.styled";
import { Button } from "../HomeHeader/HomeHeaderMain/HomeHeaderMain.styled";
import decoration from "../../assets/icons/Decoration.svg";
import icon1 from "../../assets/icons/Icon-1.svg";
import icon2 from "../../assets/icons/Icon-2.svg";
import icon3 from "../../assets/icons/Icon-3.svg";
import icon4 from "../../assets/icons/Icon-4.svg";

export const SimpleSteps = () => {
  return (
    <SimpleStepsContainer id="simple_Steps">
      <Title>
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={decoration} alt="decoration" />
      </Title>
      <StepsWrapper>
        <StepsContainer>
          <Step>
            <img src={icon1} alt="t-shirt" />
            <h4>Wybierz rzeczy</h4>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </Step>
          <Step>
            <img src={icon2} alt="bag" />
            <h4>Spakuj je</h4>
            <p>skorzystaj z worków na śmieci</p>
          </Step>
          <Step>
            <img src={icon3} alt="magnifier" />
            <h4>Zdecyduj komu chcesz pomóc</h4>
            <p>wybierz zaufane miejsce</p>
          </Step>
          <Step>
            <img src={icon4} alt="courier" />
            <h4>Zamów kuriera</h4>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </Step>
        </StepsContainer>
      </StepsWrapper>
      <Button>ODDAJ RZECZY</Button>
    </SimpleStepsContainer>
  );
};
