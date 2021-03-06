import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  StyledLabel,
  InputsWrapper,
  InputItem,
  StyledInput,
  Textarea,
  Form,
  SuccessMessage,
} from "./ContactForm.styled";
import { Error } from "./Error";
import { Button } from "../../Button/Button";
import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Imię musi zawierać minimum dwa znaki")
    .max(15, "Maksimum 22 znaki")
    .required("Musisz podać swoje imię")
    .matches(/^[a-zA-Z]*$/, "Podaj tylko swoje imię"),

  email: Yup.string()
    .email("Musisz podać prawidłowy e-mail")
    .max(45, "Maksimum 45 znaków")
    .required("Musisz podać swój e-mail"),
  message: Yup.string()
    .min(120, "Minimum 120 znaków")
    .matches(/[^$|\s+]/, "No white spaces")
    .required("Musisz podać wiadomość (minimum 120 znaków)"),
});

export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          axios
            .post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, values, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then(setIsSuccess(true))
            .then(
              setTimeout(() => {
                setIsSuccess(false);
              }, 6000)
            );

          resetForm();
          setSubmitting(false);
        }, 700);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          {isSuccess && (
            <SuccessMessage>
              <p>Wiadomość została wysłana! Wkrótce się skontaktujemy</p>
            </SuccessMessage>
          )}
          {isSubmitting && <LinearProgress />}
          <InputsWrapper>
            <InputItem>
              <StyledLabel htmlFor="name">Wpisz swoje imię</StyledLabel>
              <StyledInput
                type="text"
                name="name"
                id="name"
                placeholder="Imię"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name && errors.name}
              />
              <Error touched={touched.name} message={errors.name} />
            </InputItem>
            <InputItem>
              <StyledLabel htmlFor="email">Wpisz swój e-mail</StyledLabel>
              <StyledInput
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email && errors.email}
              />
              <Error touched={touched.email} message={errors.email} />
            </InputItem>
          </InputsWrapper>
          <div>
            <StyledLabel htmlFor="message">Wpisz swoją wiadomość</StyledLabel>
            <Textarea
              name="message"
              id="message"
              placeholder="Wpisz swoją wiadomość"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              error={touched.message && errors.message}
            ></Textarea>
            <Error touched={touched.message} message={errors.message} />
          </div>
          <Button contact name="Wyślij" type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};
