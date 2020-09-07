import styled, { css } from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 50vw;
`;
export const Navigation = styled.nav`
  margin-top: 40px;
  ${({ menu }) =>
    menu &&
    css`
      margin-top: 17px;
    `}
`;

export const List = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  padding-left: 15px;
  a {
    display: block;
    padding: 10px;
    font-size: 13px;
    color: #737373;
    cursor: pointer;
  }
  ${({ yellowBorder }) =>
    yellowBorder &&
    css`
      a {
        border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
      }
    `}
  ${({ menuListItem }) =>
    menuListItem &&
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
