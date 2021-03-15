import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const InputWrapper = styled.div`
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
`;

export const ErrorStyled = styled.div`
  align-self: flex-end;
  color: red;
  font-size: 16px;
  div {
    visibility: hidden;
  }
`;
