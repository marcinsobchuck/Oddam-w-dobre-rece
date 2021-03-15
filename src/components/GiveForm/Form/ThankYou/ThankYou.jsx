import React, { useState, useEffect } from "react";
import { Text, Wrapper, InfoWrapper, Info } from "./ThankYou.styled";
import { Decoration } from "../../../Decoration/Decoration";
import { Redirect } from "react-router-dom";

export const ThankYou = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      return clearInterval(timer);
    };
  }, [counter]);

  if (counter === 0) {
    return <Redirect to={"/"} />;
  }
  return (
    <Wrapper>
      <InfoWrapper>
        <Text wide>Dziękujemy za przesłanie formularza </Text>
        <Text>Na maila prześlemy wszelkie informacje o odbiorze.</Text>
        <Decoration />
        <Info>Automatyczne przekierowanie nastąpi za {counter} sekund</Info>
      </InfoWrapper>
    </Wrapper>
  );
};
