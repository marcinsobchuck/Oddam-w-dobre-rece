import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  height: ${({ contact }) => (contact ? "50px" : "75px")};
  font-size: 24px;
  font-weight: 300;
  text-transform: ${({ contact }) => (contact ? "none" : "uppercase")};
  padding: ${({ contact }) => (contact ? "0px 36px" : "23px 51px")};
  background-color: transparent;
  font-family: ${({ theme }) => theme.fonts.fontBase};
  margin-right: ${({ previous }) => (previous ? "50px" : 0)};
  margin: ${({ center }) => center && "0 60px"};
  color: ${({ theme }) => theme.colors.fontColor};
  border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  transition: 0.2s;
  align-self: ${({ contact }) => contact && "flex-end"};
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${({ theme }) => theme.colors.loginBorder};
  }
  ${({ headerBtn }) =>
    headerBtn &&
    css`
      font-size: 38px;
      font-weight: 300;
      width: 310px;
      height: 120px;
      padding: 0;
      :hover {
        border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
        background-color: transparent;
      }
    `}

  ${({ helpBtn }) =>
    helpBtn &&
    css`
      font-size: 24px;
      font-weight: 400;
      border: ${({ active, theme }) =>
        active
          ? `0.75px solid ${theme.colors.fontColor}`
          : "0.75px solid transparent"};
      text-transform: none;
      line-height: 24px;
      padding: 10px 30px;
      text-align: center;
      :hover {
        border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
        background-color: transparent;
      }
    `}
`;
