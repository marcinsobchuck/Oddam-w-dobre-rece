import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    margin-right: 30px;
    margin-top: 42px;
  }
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 70px;
`;

export const ErrorStyled = styled.p`
  color: red;
  font-size: 22px;
  margin-top: 10px;
`;
