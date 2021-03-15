import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import {
  Form,
  StepStatus,
  ErrorStyled,
  RadiosWrapper,
  Title,
} from "./StepOne.styled";
import { ButtonsWrapper } from "../ButtonsWrapper.styled";
import { Button } from "../../../Button/Button";
import { RadioItem } from "./RadioItem";

const validationSchema = Yup.object().shape({
  clothes: Yup.string().required("Wybierz jedną z opcji"),
});

export const StepOne = ({ handleNextClick, setSummary, summary }) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({ ...prevState, item: v.clothes }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 1/4</StepStatus>
      <Formik
        initialValues={{
          clothes: summary.item,
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <RadiosWrapper>
              <Title>Zaznacz co chcesz oddać</Title>
              <RadioItem
                htmlFor="reusable"
                id="reusable"
                name="clothes"
                value="Ubrania, które nadają się do ponownego użycia"
              />
              <RadioItem
                htmlFor="throw"
                id="throw"
                name="clothes"
                value="Ubrania, do wyrzucenia"
              />
              <RadioItem
                htmlFor="toys"
                id="toys"
                name="clothes"
                value="Zabawki"
              />
              <RadioItem
                htmlFor="books"
                id="books"
                name="clothes"
                value="Książki"
              />
              <RadioItem
                htmlFor="other"
                id="other"
                name="clothes"
                value="Inne"
              />
              <ErrorStyled>{errors.clothes}</ErrorStyled>
            </RadiosWrapper>

            <ButtonsWrapper>
              <Button name="dalej" type="submit" />
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
