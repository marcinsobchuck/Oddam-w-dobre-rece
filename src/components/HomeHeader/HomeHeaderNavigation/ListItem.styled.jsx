import styled, { css } from "styled-components";

export const ListItemWrapper = styled.li`
  padding-left: 15px;
  a {
    display: block;
    padding: 10px;
    font-size: 13px;
    color: #737373;
    cursor: pointer;
    border: ${({ hasYellowBorder, theme }) =>
      hasYellowBorder && `0.75px solid ${theme.colors.loginBorder}`};
  }

  ${({ isMenuListItem }) =>
    isMenuListItem &&
    css`
      padding-left: 0;
      a {
        padding: 10px 20px;
        color: ${({ theme }) => theme.colors.fontColor};
        border: 0.75px solid transparent;
        transition: 0.2s;
        font-size: 18px;
        &:hover {
          border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
        }
      }
    `}
`;
