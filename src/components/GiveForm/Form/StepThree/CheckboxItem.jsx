import React from "react";
import { StyledLabel, StyledCheckbox } from "./CheckboxItem.styled";
import { Field } from "formik";

export const CheckboxItem = ({ value, htmlFor }) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      <Field value={value} id={htmlFor} name="recipient" type="checkbox" />
      <StyledCheckbox>{value}</StyledCheckbox>
    </StyledLabel>
  );
};
