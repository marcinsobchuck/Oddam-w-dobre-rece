import React from "react";
import { Background, FormContainer } from "./Contact.styled";
import decoration from "../../assets/icons/Decoration.svg";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = () => {
  return (
    <div style={{ position: "relative" }}>
      <Background></Background>
      <FormContainer>
        <h1>Skontaktuj się z nami</h1>
        <img src={decoration} alt="decoration" />
        <ContactForm />
      </FormContainer>
    </div>
  );
};
