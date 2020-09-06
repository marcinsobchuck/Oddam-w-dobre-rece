import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid ${({ error }) => (error ? "red" : "grey")};
  width: 100%;
  padding: 10px 0px;
  ::placeholder {
    font-size: 18px;
    color: #3c3c3c26;
  }
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 100%;
  resize: none;
  background-color: transparent;
  padding: 10px 0;
  font-family: ${({ theme }) => theme.fonts.fontBase};
  outline: none;
  height: 100px;
  border: none;
  border-bottom: 1px solid ${({ error }) => (error ? "red" : "grey")};
  ::placeholder {
    font-size: 18px;
    color: #3c3c3c26;
    font-family: ${({ theme }) => theme.fonts.fontBase};
  }
`;

export const Form = styled.form`
  .success {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: green;
    margin-bottom: 80px;
    padding: 0 100px;
  }

  .error {
    margin-top: 3px;
    font-size: 14px;
  }
  .margin_right {
    margin-right: 16px;
  }
  .inputs_row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  label {
    font-size: 18px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.fontColor};
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    button {
      padding: 13px 53px;
      background-color: transparent;
      cursor: pointer;
      border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
      font-size: 18px;
      transition: 0.2s;
      outline: none;
      :hover {
        border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
      }
    }
  }
  .MuiLinearProgress-root {
    background-color: transparent;
  }
  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
`;
