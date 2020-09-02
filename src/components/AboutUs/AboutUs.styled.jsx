import styled from "styled-components";
import people from "../../assets/images/People.jpg";

export const AboutUsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 80px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.fontColor};
  width: 50%;

  div {
    max-width: 660px;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 38px;
    letter-spacing: -0.76px;
    text-align: center;
    font-weight: 400;
    margin-bottom: 32px;
  }

  p {
    font-size: 30px;
    letter-spacing: -0.6px;
    line-height: 54px;
    text-align: center;
    margin-top: 62px;
  }

  img[alt="signature"] {
    margin-top: 40px;
    align-self: flex-end;
  }
`;

export const Image = styled.div`
  flex-grow: 1;
  background-image: url(${people});
  background-size: cover;
`;
