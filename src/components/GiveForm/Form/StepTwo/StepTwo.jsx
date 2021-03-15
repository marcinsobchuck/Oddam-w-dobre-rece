import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { Form, StepStatus, Wrapper, TitleStyled } from "./StepTwo.styled";
import { Select } from "../Select/Select";
import { ButtonsWrapper } from "../ButtonsWrapper.styled";
import { Button } from "../../../Button/Button";

const validationSchema = Yup.object().shape({
  quantity: Yup.number().required("Wybierz ilość worków do oddania"),
});

const options = ["1", "2", "3", "4", "5"];

export const StepTwo = ({
  handleNextClick,
  handlePrevClick,
  setSummary,
  summary,
}) => {
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

              <Select
                text="Liczba 60l worków:"
                name="quantity"
                options={options}
                error={errors.quantity}
                isHorizontal
              />
            </Wrapper>
            <ButtonsWrapper>
              <Button
                name="wstecz"
                previous
                type="button"
                onClick={handlePrevClick}
              />

              <Button name="dalej" type="submit" />
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
