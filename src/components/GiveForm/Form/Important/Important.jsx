import React from "react";
import {
  ImportantWrapper,
  ImportantContent,
  ImportantTitle,
  ImportantText,
} from "./Important.styled";

export const Important = ({ text }) => {
  return (
    <>
      <ImportantWrapper>
        <ImportantContent>
          <ImportantTitle>Ważne!</ImportantTitle>
          <ImportantText>{text}</ImportantText>
        </ImportantContent>
      </ImportantWrapper>
    </>
  );
};
