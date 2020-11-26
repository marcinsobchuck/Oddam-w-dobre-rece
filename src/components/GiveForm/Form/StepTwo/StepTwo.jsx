import React, { useState } from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Form,
  StepStatus,
  ErrorStyled,
  Wrapper,
  TitleStyled,
  LabelStyled,
  SelectWrapper,
} from "./StepTwo.styled";
import { StyledButton, ButtonsWrapper } from "../Button/Button.styled";

const validationSchema = Yup.object().shape({
  quantity: Yup.number().required("Wybierz ilość worków do oddania"),
});

export const StepTwo = ({
  handleNextClick,
  handlePrevClick,
  setSummary,
  summary,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleSelect = () => {
    setIsActive((prevState) => !prevState);
  };

  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,

      quantity: v.quantity,
    }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 2/4</StepStatus>
      <Formik
        initialValues={{
          quantity: summary.quantity !== undefined ? summary.quantity : "",
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <TitleStyled>
                Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
              </TitleStyled>
              <SelectWrapper
                onClick={handleSelect}
                onBlur={isActive ? handleSelect : null}
                active={isActive}
              >
                <LabelStyled htmlFor="quantity">Liczba 60l worków:</LabelStyled>
                <Field id="quantity" name="quantity" as="select">
                  <option value="" disabled>
                    — Wybierz —
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Field>
              </SelectWrapper>
              <ErrorStyled>{errors.quantity}</ErrorStyled>
            </Wrapper>
            <ButtonsWrapper>
              <StyledButton previous type="button" onClick={handlePrevClick}>
                Wstecz
              </StyledButton>
              <StyledButton type="submit">Dalej</StyledButton>
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
