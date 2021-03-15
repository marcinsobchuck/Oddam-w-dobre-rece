import React from "react";
import { Field } from "formik";
import { Row, InputWrapper, ErrorStyled } from "./FormInput.styled";
import MaskedInput from "react-text-mask";

// 226

export const AddressFormInput = ({
  htmlFor,
  text,
  error,
  placeholder,
  maxLength,
  isPostalCode,
  postalCodeMask,
  handleChange,
  handleBlur,
}) => {
  return (
    <Row>
      <InputWrapper>
        <label htmlFor={htmlFor}>{text}</label>
        {isPostalCode ? (
          <Field
            name="postalCode"
            id="postalCode"
            placeholder="00-000"
            maxLength="6"
          >
            {({ field }) => (
              <MaskedInput
                {...field}
                mask={postalCodeMask}
                id="postalCode"
                placeholder="Kod pocztowy"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            )}
          </Field>
        ) : (
          <Field
            name={htmlFor}
            id={htmlFor}
            placeholder={placeholder}
            maxLength={maxLength}
          />
        )}
      </InputWrapper>
      <ErrorStyled>{error}</ErrorStyled>
    </Row>
  );
};
