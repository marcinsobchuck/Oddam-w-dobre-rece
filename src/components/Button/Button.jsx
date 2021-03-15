import React from "react";
import { StyledButton } from "./Button.styled";

export const Button = ({
  onClick,
  headerBtn,
  helpBtn,
  active,
  previous,
  center,
  type,
  disabled,
  name,
  contact,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      headerBtn={headerBtn}
      helpBtn={helpBtn}
      active={active}
      previous={previous}
      center={center}
      type={type}
      disabled={disabled}
      contact={contact}
    >
      {name}
    </StyledButton>
  );
};
