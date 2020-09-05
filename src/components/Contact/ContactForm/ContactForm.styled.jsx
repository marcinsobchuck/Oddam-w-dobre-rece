import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: 2px solid ${({ error }) => (error ? "red" : "blue")};
`;

export const Textarea = styled.textarea`
  outline: none;
  border: 2px solid ${({ error }) => (error ? "red" : "blue")};
`;

export const Form = styled.form`
  .MuiLinearProgress-root {
    background-color: black;
  }
  .MuiLinearProgress-bar {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
`;
