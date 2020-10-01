import React from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Form, StepStatus, ErrorStyled } from "./StepTwo.styled";

const validationSchema = Yup.object().shape({
  quantity: Yup.number().required("Wybierz ilość worków do oddania"),
});

export const StepTwo = ({ handleNextClick, handlePrevClick, setSummary }) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,

      toWho: [...prevState.toWho, v.quantity],
    }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 2/4</StepStatus>
      <Formik
        initialValues={{ quantity: "" }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
            <label htmlFor="quantity">Liczba 60l worków: </label>
            <Field id="quantity" name="quantity" as="select">
              <option value="" disabled>
                Wybierz
              </option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Field>
            <ErrorStyled>{errors.quantity}</ErrorStyled>
            <button type="submit">DALEJ</button>
            <button type="button" onClick={handlePrevClick}>
              WSTECZ
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
