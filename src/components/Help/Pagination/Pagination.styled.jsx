import styled, { css } from "styled-components";

export const PagesList = styled.ul`
  display: flex;
  margin-top: 30px;
`;

export const Page = styled.li`
  cursor: pointer;
  padding: 15px 13px;
  border: 0.75px solid transparent;
  margin: 0 10px;
  transition: 0.2s;
  :hover {
    border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
  }
  ${({ active }) =>
    active &&
    css`
      border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
    `}
`;
