import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
  h1 {
    margin-bottom: 40px;
  }
  label {
    display: block;
    position: relative;
    padding-left: 60px;
    margin-bottom: 32px;
    font-size: 24px;
    line-height: 40px;
    cursor: pointer;

    :hover input ~ span {
      background-color: transparent;
    }
    input:checked ~ span {
      background-color: ${({ theme }) => theme.colors.loginBorder};
      transition: 0.2s;
    }
    input:checked ~ span:after {
      display: block;
    }
    span:after {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border: 2px solid black;
      width: 7px;
      height: 7px;
    }
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 50px;
`;

export const ErrorStyled = styled.div`
  color: red;
  font-size: 16px;
`;

export const StyledRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  :after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
