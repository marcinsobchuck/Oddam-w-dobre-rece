import React from "react";
import { Background, FormContainer, Footer } from "./Contact.styled";
import decoration from "../../assets/icons/Decoration.svg";
import { ContactForm } from "./ContactForm/ContactForm";
import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";

export const Contact = () => {
  return (
    <div style={{ position: "relative" }} id="contact">
      <Background>
        <FormContainer>
          <h1>Skontaktuj się z nami</h1>
          <img src={decoration} alt="decoration" />
          <ContactForm />
        </FormContainer>
        <Footer>
          <p>Copyright by Coders Lab</p>
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="intagram" />
            </a>
          </div>
        </Footer>
      </Background>
    </div>
  );
};
