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
} from "./RegisterForm.styled";
import { Input } from "../../Contact/ContactForm/ContactForm.styled";
import { AuthContext } from "../../../context";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Musisz podać prawidłowy e-mail")
    .max(45, "Maksimum 45 znaków")
    .required("Musisz podać swój e-mail"),
  password: Yup.string()
    .min(6, "Hasło składa się z minimum 6 znaków!")
    .required("Musisz podać hasło"),
  passwordConfirmation: Yup.string()
    .required("Musisz potwierdzić hasło")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być identyczne!"),
});

export const RegisterForm = () => {
  const { register, currentUser } = useContext(AuthContext);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => register(values.email, values.password)}
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
                  <Input
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
                  <Input
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
                <InputBox>
                  <label htmlFor="passwordConfirmation">Powtórz hasło</label>
                  <Input
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                    error={
                      touched.passwordConfirmation &&
                      errors.passwordConfirmation
                    }
                  />
                  <Error
                    touched={touched.passwordConfirmation}
                    message={errors.passwordConfirmation}
                  />
                </InputBox>
              </FormWrap>
              <ButtonsWrapper>
                <Link to="/logowanie">
                  <Button>Zaloguj się</Button>
                </Link>
                <Redirect
                  to={
                    currentUser &&
                    values.password === values.passwordConfirmation
                      ? "/"
                      : "/rejestracja"
                  }
                />
                <Button type="submit" register>
                  Załóż konto
                </Button>
              </ButtonsWrapper>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
