import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
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

export const RadiosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
