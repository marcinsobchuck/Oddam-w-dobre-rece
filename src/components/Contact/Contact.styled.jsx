import styled from "styled-components";
import background from "../../assets/images/Background-Contact-Form.jpg";

export const Wrapper = styled.section`
  position: relative;
`;

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  background-position-y: -40px;

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.79);
    z-index: 2;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 8%;
  top: 15%;
  z-index: 55;
  max-width: 550px;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.fontColor};
  font-weight: 400;
  letter-spacing: -0.76px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Footer = styled.footer`
  position: absolute;
  z-index: 2000;
  display: flex;
  bottom: 6px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Copyright = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const IconsWrapper = styled.div`
  padding-right: 8%;
  img:nth-of-type(1) {
    margin-right: 12px;
  }
`;
