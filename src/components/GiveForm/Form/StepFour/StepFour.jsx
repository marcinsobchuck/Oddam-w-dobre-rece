import React from "react";
import { Formik, Field } from "formik";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from "yup";
import pl from "date-fns/locale/pl";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import Moment from "moment";
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
import { StyledButton, ButtonsWrapper } from "../Button/Button.styled";

registerLocale("pl", pl);

const validationSchema = Yup.object().shape({
  street: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  city: Yup.string().required("Pole wymagane").min("2", "Conajmniej 2 znaki"),
  postalCode: Yup.string()
    .required("Pole wymagane")
    .matches(/^[0-9]{2}(?:-[0-9]{3})?$/, "Prawidłowy format to XX-XXX")
    .test("postalCode", "Wymagane 5 znaków", (val) =>
      val ? val.length === 6 : null
    ),
  phone: Yup.number()
    .typeError("Tylko cyfry")
    .required("Pole wymagane")
    .test("phone", "Wymagane 9 znaków", (val) =>
      val ? val.toString().length === 9 : null
    ),
  date: Yup.date().required("Pole wymagane"),
  hour: Yup.date().required("Pole wymagane"),
});

export const StepFour = ({ handleNextClick, handlePrevClick, setSummary }) => {
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
        hour: Moment(v.hour).format("HH:mm"),
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
              <Title>
                Podaj adres oraz termin odbioru rzeczy przez kuriera
              </Title>
              <FormsWrapper>
                <AddressWrapper>
                  <h2>Adres odbioru:</h2>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="street">Ulica</label>
                      <Field name="street" id="street" />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.street ? errors.street : <div>error</div>}
                    </ErrorStyled>
                  </Row>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="city">Miasto</label>
                      <Field name="city" id="city" />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.city ? errors.city : <div>error</div>}
                    </ErrorStyled>
                  </Row>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="postalCode">Kod pocztowy</label>
                      <Field
                        name="postalCode"
                        id="postalCode"
                        placeholder="00-000"
                      />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.postalCode ? errors.postalCode : <div>error</div>}
                    </ErrorStyled>
                  </Row>
                  <Row>
                    <InputWrapper>
                      <label htmlFor="phone">Numer telefonu</label>
                      <Field name="phone" id="phone" />
                    </InputWrapper>
                    <ErrorStyled>
                      {errors.phone ? errors.phone : <div>error</div>}
                    </ErrorStyled>
                  </Row>
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
