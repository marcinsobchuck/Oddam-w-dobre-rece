import React, { useState } from "react";
import { Field } from "formik";
import { SelectWrapper, SelectBox, Title, ErrorStyled } from "./Select.styled";

export const Select = ({ text, name, options, error, isHorizontal }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSelect = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <SelectWrapper isHorizontal={isHorizontal} active={isActive}>
      <SelectBox isHorizontal={isHorizontal}>
        <Title>{text}</Title>
        <Field
          onClick={handleSelect}
          onBlur={isActive ? handleSelect : null}
          name={name}
          as="select"
        >
          <option value="" disabled>
            — Wybierz —
          </option>
          {options.map((el) => {
            return (
              <option key={el} value={el}>
                {el}
              </option>
            );
          })}
        </Field>
      </SelectBox>
      <ErrorStyled>{error}</ErrorStyled>
    </SelectWrapper>
  );
};
