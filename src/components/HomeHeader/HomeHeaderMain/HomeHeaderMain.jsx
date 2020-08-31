import React from "react";
import {
  MainContainer,
  Title,
  Button,
  ButtonsWrap,
} from "./HomeHeaderMain.styled";
import { Link } from "react-router-dom";
import decoration from "../../../assets/icons/Decoration.svg";

export const HomeHeaderMain = () => {
  return (
    <MainContainer>
      <Title>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</Title>
      <img src={decoration} alt="decoration" />
      <ButtonsWrap>
        <Link to="/oddaj-rzeczy">
          <Button>Oddaj rzeczy</Button>
        </Link>
        <Button>Zorganizuj zbiórkę</Button>
      </ButtonsWrap>
    </MainContainer>
  );
};
