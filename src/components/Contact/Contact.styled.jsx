import styled from "styled-components";
import background from "../../assets/images/Background-Contact-Form.jpg";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${background});
  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 2;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 400px;
  top: 25%;
  color: black;
  z-index: 55;
  h1 {
    font-size: 38px;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 400;
    letter-spacing: -0.76px;
    text-align: center;
    margin-bottom: 30px;
  }
  img {
    margin-bottom: 70px;
  }
`;
