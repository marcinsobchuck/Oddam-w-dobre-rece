import React, { useState } from "react";
import { Formik, Field } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import pl from "date-fns/locale/pl";
import Moment from "moment";

import {
  StepStatus,
  Form,
  AddressWrapper,
  PickUpWrapper,
  Wrapper,
  ButtonsWrapper,
  InputWrapper,
  Title,
} from "./StepFour.styled";

registerLocale("pl", pl);

const validationSchema = Yup.object().shape({
  street: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  city: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  postalCode: Yup.string()
    .matches(/^[0-9]{2}(?:-[0-9]{3})?$/, "Prawidłowy format to XX-XXX")
    .test("postalCode", "Wymagane 5 znaków", (val) =>
      val ? val.length === 6 : null
    ),
  phone: Yup.number().test("phone", "Wymagane 9 znaków", (val) =>
    val ? val.toString().length === 9 : null
  ),
  date: Yup.date().required("To pole jest wymagane"),
  hour: Yup.string()
    .matches(
      /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/,
      "Prawidłowy format godziny to HH:MM"
    )
    .required("To pole jest wymagane"),
});

export const StepFour = ({ handleNextClick, handlePrevClick, setSummary }) => {
  const [startDate] = useState(new Date());

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
        date: Moment(v.date).format("DD-MM-YYYY"),
        hour: v.hour,
        comments: v.comments,
      },
    }));
    handleNextClick();
  };
  return (
    <>
      <StepStatus>Krok 4/4</StepStatus>
      <Title>Podaj adres oraz termin odbioru rzeczy przez kuriera</Title>
      <Formik
        initialValues={{
          street: "",
          city: "",
          postalCode: "",
          phone: "",
          date: "",
          hour: "",
          comments: "",
        }}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleSubmit, errors, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <Wrapper>
              <AddressWrapper>
                <h2>Adres odbioru:</h2>
                <InputWrapper>
                  <label htmlFor="street">Ulica</label>
                  <Field name="street" id="street" />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="city">Miasto</label>
                  <Field name="city" id="city" />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="postalCode">Kod pocztowy</label>
                  <Field name="postalCode" id="postalCode" />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="phone">Numer telefonu</label>
                  <Field name="phone" id="phone" />
                </InputWrapper>
              </AddressWrapper>
              <PickUpWrapper>
                <h2>Termin odbioru:</h2>
                <InputWrapper>
                  <label htmlFor="date">Data</label>
                  <DatePicker
                    selected={values.date ? values.date : null}
                    onChange={(date) => setFieldValue("date", date)}
                    dateFormatCalendar="MMMM d, yyyy"
                    locale="pl"
                    isClearable
                  />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="hour">Godzina</label>
                  <Field name="hour" id="hour" />
                </InputWrapper>
                <InputWrapper>
                  <label htmlFor="comments">Uwagi dla kuriera</label>
                  <Field name="comments" id="comments" as="textarea" />
                </InputWrapper>
              </PickUpWrapper>
            </Wrapper>
            <ButtonsWrapper>
              <button type="submit">DALEJ</button>
              <button type="button" onClick={handlePrevClick}>
                WSTECZ
              </button>
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </>
  );
};
