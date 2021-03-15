import React from "react";

import { StyledLabel, StyledRadio } from "./RadioItem.styled";
import { Field } from "formik";

export const RadioItem = ({ htmlFor, name, value }) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <Field id={htmlFor} name={name} value={value} type="radio" />
      <StyledRadio />
      {value}
    </StyledLabel>
  );
};
