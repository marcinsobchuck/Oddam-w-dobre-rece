import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  div {
    visibility: hidden;
  }
`;

export const CheckboxFormWrapper = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  display: flex;
  flex-direction: column;
`;

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
`;

export const OrganisationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    display: flex;
    flex-direction: column;
    input {
      outline: none;
      background-color: transparent;
      padding: 4px 10px;
      border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
      font-size: 24px;
      color: ${({ theme }) => theme.colors.fontColor};
    }
  }
`;
