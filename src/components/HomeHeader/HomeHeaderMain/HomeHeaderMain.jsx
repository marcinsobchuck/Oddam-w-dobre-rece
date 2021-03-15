import React from "react";
import { MainContainer, Title, ButtonsWrapper } from "./HomeHeaderMain.styled";
import { Button } from "../../Button/Button";
import { Link } from "react-router-dom";
import { Decoration } from "../../Decoration/Decoration";

export const HomeHeaderMain = () => {
  return (
    <MainContainer>
      <Title>Zacznij pomagać! </Title>
      <Title>Oddaj niechciane rzeczy w zaufane ręce</Title>
      <Decoration />
      <ButtonsWrapper>
        <Link to="/oddaj-rzeczy">
          <Button headerBtn name="Oddaj rzeczy" />
        </Link>

        <Link to="#">
          <Button headerBtn name="Zorganizuj zbiórkę" />
        </Link>
      </ButtonsWrapper>
    </MainContainer>
  );
};
