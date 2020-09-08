import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Error } from "../../Contact/ContactForm/Error";
import { Form, InputBox, ButtonsWrapper, Button } from "./LoginForm.styled";
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
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <>
            <Form>
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
            </Form>
            <ButtonsWrapper>
              <Link to="/rejestracja">
                <Button>Załóż konto</Button>
              </Link>
              <Link to={currentUser ? "/" : "/logowanie"}>
                <Button login onClick={logIn(values.email, values.password)}>
                  Zaloguj się
                </Button>
              </Link>
            </ButtonsWrapper>
          </>
        )}
      </Formik>
    </>
  );
};
