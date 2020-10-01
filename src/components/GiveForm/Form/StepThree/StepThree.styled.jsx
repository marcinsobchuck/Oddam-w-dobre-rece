import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

export const ErrorStyled = styled.p`
  color: red;
  font-size: 22px;
  margin-top: 10px;
`;

export const CheckboxFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxWrapper = styled.div`
  display: flex;

  align-items: center;
`;

export const OrganisationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
