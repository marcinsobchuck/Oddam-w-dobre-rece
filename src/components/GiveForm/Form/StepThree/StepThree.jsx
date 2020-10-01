import React from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Form,
  StepStatus,
  ErrorStyled,
  CheckboxFormWrapper,
  CheckboxWrapper,
  OrganisationFormWrapper,
} from "./StepThree.styled";

const validationSchema = Yup.object().shape({
  helpTarget: Yup.string().required("Wybierz komu chcesz pomóc"),
  organisation: Yup.string().min("3", "Minimum 3 znaki"),
});

export const StepThree = ({ handleNextClick, handlePrevClick, setSummary }) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,

      localisation: v.localisation,
      toWho: [...prevState.toWho, v.helpTarget],
      organisation: v.organisation,
    }));
    handleNextClick();
  };

  return (
    <>
      <StepStatus>Krok 3/4</StepStatus>
      <Formik
        initialValues={{ localisation: "", helpTarget: [], organisation: "" }}
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

          if (values.organisation) {
            values.localisation = "";
          }

          return errors;
        }}
      >
        {({ values, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="localisation">Lokalizacja:</label>
            <Field id="localisation" name="localisation" as="select">
              <option value="" disabled>
                Wybierz
              </option>
              <option value="Poznań">Poznań</option>
              <option value="Warszawa">Warszawa</option>
              <option value="Kraków">Kraków</option>
              <option value="Wrocław">Wrocław</option>
              <option value="Katowice">Katowice</option>
            </Field>
            <ErrorStyled>{errors.localisation}</ErrorStyled>

            <h2>Komu chcesz pomóc?</h2>
            <CheckboxFormWrapper>
              <CheckboxWrapper>
                <Field
                  value="dzieciom"
                  id="kids"
                  name="helpTarget"
                  type="checkbox"
                />
                <label htmlFor="kids">Dzieciom</label>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Field
                  value="samotnym matkom"
                  id="mothers"
                  name="helpTarget"
                  type="checkbox"
                />
                <label htmlFor="mothers">Samotnym matkom</label>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Field
                  value="bezdomnym"
                  id="homeless"
                  name="helpTarget"
                  type="checkbox"
                />
                <label htmlFor="homeless">Bezdomnym</label>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Field
                  value="niepełnosprawnym"
                  id="disabled"
                  name="helpTarget"
                  type="checkbox"
                />
                <label htmlFor="disabled">Niepełnosprawnym</label>
              </CheckboxWrapper>
              <CheckboxWrapper>
                <Field
                  value="osobom starszym"
                  id="elderly"
                  name="helpTarget"
                  type="checkbox"
                />
                <label htmlFor="elderly">Osobom starszym</label>
              </CheckboxWrapper>
              <ErrorStyled>{errors.helpTarget}</ErrorStyled>
            </CheckboxFormWrapper>
            <OrganisationFormWrapper>
              <label htmlFor="organisation">
                Wpisz nazwę konkretnej organizacji (opcjonalnie)
              </label>
              <Field type="input" name="organisation" id="organisation" />
              <ErrorStyled>{errors.organisation}</ErrorStyled>
            </OrganisationFormWrapper>
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
