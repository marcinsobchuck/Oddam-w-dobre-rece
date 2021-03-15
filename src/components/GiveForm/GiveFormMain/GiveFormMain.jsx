import React from "react";
import {
  MainContainer,
  Title,
  FourStepsContainer,
  FourStepsTitle,
  Squares,
  Square,
  SquareBox,
  Number,
  SquareText,
} from "./GiveFormMain.styled";
import { Decoration } from "../../Decoration/Decoration";

export const GiveFormMain = () => {
  return (
    <MainContainer>
      <Title>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</Title>
      <Decoration />
      <FourStepsContainer>
        <FourStepsTitle>Wystarczą 4 proste kroki:</FourStepsTitle>
        <Squares>
          <Square>
            <SquareBox>
              <Number>1</Number>
              <SquareText>Wybierz rzeczy</SquareText>
            </SquareBox>
          </Square>
          <Square>
            <SquareBox>
              <Number>2</Number>
              <SquareText>Spakuj je w worki</SquareText>
            </SquareBox>
          </Square>
          <Square>
            <SquareBox>
              <Number>3</Number>
              <SquareText>Wybierz fundację</SquareText>
            </SquareBox>
          </Square>
          <Square>
            <SquareBox>
              <Number>4</Number>
              <SquareText>Zamów kuriera</SquareText>
            </SquareBox>
          </Square>
        </Squares>
      </FourStepsContainer>
    </MainContainer>
  );
};
