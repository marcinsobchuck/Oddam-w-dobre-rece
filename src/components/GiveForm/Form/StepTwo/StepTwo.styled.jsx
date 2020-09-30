import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  input {
    margin-right: 30px;
    margin-top: 42px;
  }
  option[value=""][disabled] {
    display: none;
  }
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 70px;
`;
