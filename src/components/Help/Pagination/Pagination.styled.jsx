import styled, { css } from "styled-components";

export const PagesList = styled.ul`
  display: flex;
  margin-top: 30px;
  margin-bottom: 80px;
`;

export const Page = styled.li`
  padding: 15px 13px;
  border: 0.75px solid transparent;
  transition: 0.2s;
  :hover {
    border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  }
  ${({ active }) =>
    active &&
    css`
      border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
    `}
`;
