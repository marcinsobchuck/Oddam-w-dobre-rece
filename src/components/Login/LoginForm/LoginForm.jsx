import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Error } from "../../Contact/ContactForm/Error";
import {
  Form,
  InputBox,
  ButtonsWrapper,
  Button,
  FormWrap,
} from "./LoginForm.styled";
import { StyledInput } from "../../Contact/ContactForm/ContactForm.styled";
import { AuthContext } from "../../../context";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Musisz podać prawidłowy e-mail")
    .max(45, "Maksimum 45 znaków")
    .required("Musisz podać swój e-mail"),
  password: Yup.string()
    .min(6, "Hasło składa się z minimum 6 znaków!")
    .required("Musisz podać hasło"),
});

export const LoginForm = () => {
  const { logIn, currentUser } = useContext(AuthContext);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => logIn(values.email, values.password)}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <FormWrap>
                <InputBox marginBot>
                  <label htmlFor="email">Email</label>
                  <StyledInput
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={touched.email && errors.email}
                  />
                  <Error touched={touched.email} message={errors.email} />
                </InputBox>
                <InputBox>
                  <label htmlFor="password">Hasło</label>
                  <StyledInput
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={touched.password && errors.password}
                  />
                  <Error touched={touched.password} message={errors.password} />
                </InputBox>
              </FormWrap>
              <ButtonsWrapper>
                <Link to="/rejestracja">
                  <Button type="button">Załóż konto</Button>
                </Link>
                <Redirect to={currentUser ? "/" : "/logowanie"} />
                <Button login type="submit">
                  Zaloguj się
                </Button>
              </ButtonsWrapper>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
