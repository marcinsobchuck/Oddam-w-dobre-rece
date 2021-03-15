import React from "react";
import {
  Background,
  FormContainer,
  Title,
  Footer,
  Wrapper,
  Copyright,
  IconsWrapper,
} from "./Contact.styled";
import { Decoration } from "../Decoration/Decoration";
import { ContactForm } from "./ContactForm/ContactForm";
import facebook from "../../assets/icons/Facebook.svg";
import instagram from "../../assets/icons/Instagram.svg";

export const Contact = () => {
  return (
    <Wrapper id="contact">
      <Background>
        <FormContainer>
          <Title>Skontaktuj się z nami</Title>
          <Decoration />
          <ContactForm />
        </FormContainer>
        <Footer>
          <Copyright>Copyright by Coders Lab</Copyright>
          <IconsWrapper>
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
          </IconsWrapper>
        </Footer>
      </Background>
    </Wrapper>
  );
};
