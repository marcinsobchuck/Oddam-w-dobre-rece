import styled from "styled-components";
import backgroundForm from "../../../assets/images/Background-Form.jpg";

export const FormWrapper = styled.div`
  margin: 0 auto;
  background-image: url(${backgroundForm});
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 auto;
  height: ${({ sum }) => (sum ? "100vh" : "80vh")};
`;
