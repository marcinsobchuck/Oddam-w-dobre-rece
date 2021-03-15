import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  background-color: transparent;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid ${({ error }) => (error ? "red" : "#818181")};
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
  border-bottom: 1px solid ${({ error }) => (error ? "red" : "#818181")};
  ::placeholder {
    font-size: 18px;
    color: #3c3c3c26;
    font-family: ${({ theme }) => theme.fonts.fontBase};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  .MuiLinearProgress-root {
    background-color: transparent;
  }
  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
`;

export const SuccessMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: green;
  margin-bottom: 80px;
  padding: 0 100px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const InputItem = styled.div`
  :nth-of-type(1) {
    margin-right: 16px;
  }
`;
export const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.fontColor};
`;
