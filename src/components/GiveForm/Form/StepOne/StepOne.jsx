import React from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Form, StepStatus, ErrorStyled } from "./StepOne.styled";

const validationSchema = Yup.object().shape({
  clothes: Yup.string().required("Wybierz jedną z opcji"),
});

export const StepOne = ({ handleNextClick, setSummary, summary }) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({ ...prevState, toWho: [v.clothes] }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 1/4</StepStatus>
      <Formik
        initialValues={{
          clothes: summary.toWho[0],
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <h1>Zaznacz co chcesz oddać</h1>
            <label htmlFor="reusable">
              <Field
                id="reusable"
                name="clothes"
                value="Ubrania, które nadają się do ponownego użycia"
                type="radio"
              />
              Ubrania, które nadają się do ponownego użycia
            </label>
            <label htmlFor="throw">
              <Field
                id="throw"
                name="clothes"
                value="Ubrania, do wyrzucenia"
                type="radio"
              />
              Ubrania, do wyrzucenia
            </label>
            <label htmlFor="toys">
              <Field id="toys" name="clothes" value="Zabawki" type="radio" />
              Zabawki
            </label>
            <label htmlFor="books">
              <Field id="books" name="clothes" value="Książki" type="radio" />
              Książki
            </label>
            <label htmlFor="other">
              <Field id="other" name="clothes" value="Inne" type="radio" />
              Inne
            </label>
            <ErrorStyled>{errors.clothes}</ErrorStyled>
            <button type="submit">DALEJ</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
