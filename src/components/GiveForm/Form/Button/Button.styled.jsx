import styled from "styled-components";

export const StyledButton = styled.button`
  height: 75px;
  font-size: 24px;
  font-weight: 300;
  padding: 23px 51px;
  background-color: transparent;
  margin-right: ${({ previous }) => (previous ? "50px" : 0)};
  color: ${({ theme }) => theme.colors.fontColor};
  border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  transition: 0.2s;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
`;
