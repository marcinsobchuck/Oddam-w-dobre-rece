import React, { useState } from "react";

import { Formik, Field } from "formik";
import * as Yup from "yup";

import {
  Form,
  StepStatus,
  ErrorStyled,
  CheckboxFormWrapper,
  CheckboxWrapper,
  OrganisationFormWrapper,
  Wrapper,
  SelectWrapper,
  StyledCheckbox,
  CheckboxesWrapper,
} from "./StepThree.styled";
import { StyledButton, ButtonsWrapper } from "../Button/Button.styled";

const validationSchema = Yup.object().shape({
  recipient: Yup.string().required("Wybierz komu chcesz pomóc"),
});

export const StepThree = ({
  handleNextClick,
  handlePrevClick,
  setSummary,
  summary,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,

      localisation: v.localisation,
      recipient: v.recipient,
      organisation: v.organisation,
    }));
    handleNextClick();
  };

  const handleSelect = () => {
    setIsActive((prevState) => !prevState);
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
              <SelectWrapper active={isActive}>
                <h2>Lokalizacja:</h2>
                <Field
                  onClick={handleSelect}
                  onBlur={isActive ? handleSelect : null}
                  id="localisation"
                  name="localisation"
                  as="select"
                >
                  <option value="" disabled>
                    — Wybierz —
                  </option>
                  <option value="Poznań">Poznań</option>
                  <option value="Warszawa">Warszawa</option>
                  <option value="Kraków">Kraków</option>
                  <option value="Wrocław">Wrocław</option>
                  <option value="Katowice">Katowice</option>
                </Field>
                <ErrorStyled>
                  {errors.localisation ? errors.localisation : <div>error</div>}
                </ErrorStyled>
              </SelectWrapper>
              <CheckboxFormWrapper>
                <h2>Komu chcesz pomóc?</h2>
                <CheckboxesWrapper>
                  <CheckboxWrapper>
                    <label>
                      <Field
                        value="dzieciom"
                        id="kids"
                        name="recipient"
                        type="checkbox"
                      />
                      <StyledCheckbox>dzieciom</StyledCheckbox>
                    </label>
                  </CheckboxWrapper>
                  <CheckboxWrapper>
                    <label htmlFor="mothers">
                      <Field
                        value="samotnym matkom"
                        id="mothers"
                        name="recipient"
                        type="checkbox"
                      />
                      <StyledCheckbox>samotnym matkom</StyledCheckbox>
                    </label>
                  </CheckboxWrapper>
                  <CheckboxWrapper>
                    <label htmlFor="homeless">
                      <Field
                        value="bezdomnym"
                        id="homeless"
                        name="recipient"
                        type="checkbox"
                      />
                      <StyledCheckbox>bezdomnym</StyledCheckbox>
                    </label>
                  </CheckboxWrapper>
                  <CheckboxWrapper>
                    <label htmlFor="disabled">
                      <Field
                        value="niepełnosprawnym"
                        id="disabled"
                        name="recipient"
                        type="checkbox"
                      />
                      <StyledCheckbox bottomrow>
                        niepełnosprawnym
                      </StyledCheckbox>
                    </label>
                  </CheckboxWrapper>
                  <CheckboxWrapper>
                    <label htmlFor="elderly">
                      <Field
                        value="osobom starszym"
                        id="elderly"
                        name="recipient"
                        type="checkbox"
                      />
                      <StyledCheckbox bottomrow>osobom starszym</StyledCheckbox>
                    </label>
                  </CheckboxWrapper>
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
