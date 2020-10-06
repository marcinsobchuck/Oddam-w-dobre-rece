import styled from "styled-components";

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 70px;
`;

export const Wrapper = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PickUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    max-width: 110px;
    font-size: 24px;
    font-weight: 300;
    margin-right: 35px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 50px;
`;
