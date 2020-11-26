import styled from "styled-components";

export const Form = styled.form`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: 60vh;
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 70px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  flex-grow: 1;
`;

export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  h2 {
    margin-bottom: 20px;
    font-weight: 600;
  }
`;

export const PickUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  h2 {
    margin-bottom: 20px;
    font-weight: 600;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    outline: none;
    height: 40px;
    flex-grow: 1;
    border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
    padding: 4px 10px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.fontColor};
    background-color: transparent;
  }

  label {
    font-size: 24px;
    font-weight: 300;
    width: 30%;
    margin-right: 16px;
    line-height: 26px;
    align-self: ${({ comments }) => (comments ? "flex-start" : "center")};
  }

  textarea {
    height: 120px;
    resize: none;
    flex-grow: 1;
    outline: none;
    background-color: transparent;
    padding: 4px 10px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.fontColor};
  }

  .react-datepicker-wrapper {
    flex-grow: 1;

    .react-datepicker__input-container {
      display: flex;

      .react-datepicker__close-icon::after {
        background-color: ${({ theme }) => theme.colors.loginBorder};
        color: black;
        font-family: "Font Awesome 5 Free";
        font-weight: 600;
        content: "\f00d";
      }
    }
  }

  .react-datepicker__navigation {
    outline: none;
  }

  .react-datepicker__month {
    background-color: ${({ theme }) => theme.colors.loginBorder};
    margin: 0;
    .react-datepicker__day {
      outline: none;
    }
  }

  .react-datepicker__time-list {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 50px;
`;

export const FormsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ErrorStyled = styled.div`
  align-self: flex-end;
  color: red;
  font-size: 16px;
  div {
    visibility: hidden;
  }
`;
