import React from "react";
import { Formik, Field } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import pl from "date-fns/locale/pl";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import {
  StepStatus,
  Form,
  AddressWrapper,
  PickUpWrapper,
  Wrapper,
  InputWrapper,
  Row,
  Title,
  FormsWrapper,
  ErrorStyled,
} from "./StepFour.styled";
import { ButtonsWrapper } from "../ButtonsWrapper.styled";
import { Button } from "../../../Button/Button";
import { AddressFormInput } from "./FormInput";

registerLocale("pl", pl);

const postalCodeMask = [/\d/, /\d/, "-", /\d/, /\d/, /\d/];

const validationSchema = Yup.object().shape({
  street: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  city: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  postalCode: Yup.string()
    .required("Pole wymagane")
    .matches(/^[0-9]{2}(?:-[0-9]{3})?$/, "Prawidłowy format to XX-XXX"),
  phone: Yup.number()
    .typeError("Tylko cyfry")
    .required("Pole wymagane")
    .test("phone", "Wymagane 9 znaków", (val) =>
      val ? val.toString().length === 9 : null
    ),
  date: Yup.date().typeError("Pole wymagane").required("Pole wymagane"),
  hour: Yup.date().typeError("Pole wymagane").required("Pole wymagane"),
});

export const StepFour = ({
  handleNextClick,
  handlePrevClick,
  setSummary,
  summary,
}) => {
  const handleUpdate = (v) => {
    setSummary((prevState) => ({
      ...prevState,
      address: {
        street: v.street,
        city: v.city,
        postalCode: v.postalCode,
        phone: v.phone,
      },
      pickup: {
        date: v.date,
        hour: v.hour,
        comments: v.comments,
      },
    }));
    handleNextClick();
  };
  return (
    <>
      <StepStatus>Krok 4/4</StepStatus>
      <Formik
        initialValues={{
          street: summary.address.street !== "" ? summary.address.street : "",
          city: summary.address.city !== "" ? summary.address.city : "",
          postalCode:
            summary.address.postalCode !== "" ? summary.address.postalCode : "",
          phone: summary.address.phone !== "" ? summary.address.phone : "",
          date: summary.pickup.date !== "" ? summary.pickup.date : "",
          hour: summary.pickup.hour !== "" ? summary.pickup.hour : "",
          comments:
            summary.pickup.comments !== "" ? summary.pickup.comments : "",
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleSubmit,
          errors,
          setFieldValue,
          handleChange,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <Title>
                Podaj adres oraz termin odbioru rzeczy przez kuriera
              </Title>
              <FormsWrapper>
                <AddressWrapper>
                  <h2>Adres odbioru:</h2>
                  <AddressFormInput
                    htmlFor="street"
                    text="Ulica"
                    error={errors.street ? errors.street : <div>error</div>}
                  />
                  <AddressFormInput
                    htmlFor="city"
                    text="Miasto"
                    error={errors.city ? errors.city : <div>error</div>}
                  />
                  <AddressFormInput
                    isPostalCode
                    postalCodeMask={postalCodeMask}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    htmlFor="postalCode"
                    text="Kod pocztowy"
                    error={
                      errors.postalCode ? errors.postalCode : <div>error</div>
                    }
                  />
                  <AddressFormInput
                    htmlFor="phone"
                    text="Numer telefonu"
                    maxLength="9"
                    error={errors.phone ? errors.phone : <div>error</div>}
                  />
                </AddressWrapper>
                <PickUpWrapper>
                  <h2>Termin odbioru:</h2>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="date">Data</label>
                      <DatePicker
                        selected={values.date ? values.date : null}
                        onChange={(date) => setFieldValue("date", date)}
                        dateFormatCalendar="MMMM d, yyyy"
                        locale="pl"
                        isClearable
                        placeholderText="DD/MM/YYYY"
                      />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.date ? errors.date : <div>error</div>}
                    </ErrorStyled>
                  </Row>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="hour">Godzina</label>
                      <DatePicker
                        selected={values.hour}
                        onChange={(hour) => setFieldValue("hour", hour)}
                        showTimeSelect
                        showTimeSelectOnly
                        minTime={setHours(setMinutes(new Date(), 0), 8)}
                        maxTime={setHours(setMinutes(new Date(), 30), 18)}
                        dateFormat="HH:mm"
                        locale="pl"
                        placeholderText="HH:MM"
                      />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.hour ? errors.hour : <div>error</div>}
                    </ErrorStyled>
                  </Row>
                  <Row>
                    <InputWrapper comments>
                      <label htmlFor="comments">Uwagi dla kuriera</label>
                      <Field name="comments" id="comments" as="textarea" />
                    </InputWrapper>
                  </Row>
                </PickUpWrapper>
              </FormsWrapper>
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
