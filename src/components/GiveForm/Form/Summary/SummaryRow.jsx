import React from "react";
import { Row, NameStyled, InfoStyled } from "./SummaryRow.styled";

export const SummaryRow = ({ name, info }) => {
  return (
    <Row>
      <NameStyled>{name}</NameStyled>
      <InfoStyled>{info}</InfoStyled>
    </Row>
  );
};
