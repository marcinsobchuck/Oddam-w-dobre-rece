import React from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Select } from "../Select/Select";
import {
  Form,
  StepStatus,
  ErrorStyled,
  CheckboxFormWrapper,
  OrganisationFormWrapper,
  Wrapper,
  CheckboxesWrapper,
} from "./StepThree.styled";
import { ButtonsWrapper } from "../ButtonsWrapper.styled";
import { Button } from "../../../Button/Button";
import { CheckboxItem } from "./CheckboxItem";

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required("Wybierz komu chcesz pomóc"),
});

const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];

export const StepThree = ({
  handleNextClick,
  handlePrevClick,
  setSummary,
  summary,
}) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,

      localisation: v.localisation,
      recipient: v.recipient,
      organisation: v.organisation,
    }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 3/4</StepStatus>
      <Formik
        initialValues={{
          localisation:
            summary.localisation !== undefined ? summary.localisation : "",
          recipient: summary.recipient !== undefined ? summary.recipient : [],
          organisation:
            summary.organisation !== undefined ? summary.organisation : "",
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
        validate={(values) => {
          let errors = {};
          if (values.organisation === "") {
            errors.localisation = "Musisz podać lokalizację";
          }

          if (values.localisation) {
            errors = {};
          }

          return errors;
        }}
      >
        {({ handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <Select
                text="Lokalizacja:"
                name="localisation"
                options={options}
                error={
                  errors.localisation ? errors.localisation : <div>error</div>
                }
              />
              <CheckboxFormWrapper>
                <h2>Komu chcesz pomóc?</h2>
                <CheckboxesWrapper>
                  <CheckboxItem htmlFor="kids" value="dzieciom" />
                  <CheckboxItem hmtlFor="mothers" value="samotnym matkom" />
                  <CheckboxItem htmlFor="homeless" value="bezdomnym" />
                  <CheckboxItem htmlFor="disabled" value="niepełnosprawnym" />
                  <CheckboxItem htmlFor="elderly" value="osobom starszym" />
                </CheckboxesWrapper>
                <ErrorStyled>
                  {errors.recipient ? errors.recipient : <div>error</div>}
                </ErrorStyled>
              </CheckboxFormWrapper>
              <OrganisationFormWrapper>
                <div>
                  <h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
                  <Field type="input" name="organisation" id="organisation" />
                </div>
              </OrganisationFormWrapper>
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
