import React, { useState, useEffect } from "react";
import { Text, Wrapper, InfoWrapper } from "./ThankYou.styled";
import decoration from "../../../../assets/icons/Decoration.svg";
import { Redirect } from "react-router-dom";

export const ThankYou = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(true);
    }, 10000);
  }, []);

  if (redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <Wrapper>
      <InfoWrapper>
        <Text wide>Dziękujemy za przesłanie formularza </Text>
        <Text>Na maila prześlemy wszelkie informacje o odbiorze.</Text>
        <img src={decoration} alt="decoration" />
        <p>Automatyczne przekierowanie nastąpi za 10 sekund</p>
      </InfoWrapper>
    </Wrapper>
  );
};
