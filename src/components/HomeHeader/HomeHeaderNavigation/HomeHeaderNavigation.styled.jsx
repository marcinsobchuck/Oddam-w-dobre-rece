import styled, { css } from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    margin-right: 60px;
  }
`;
export const Navigation = styled.nav`
  margin-top: ${({ menu }) => (menu ? "17px" : "40px")};

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    /* display: ${({ menu }) => (menu ? "none" : null)}; */

    ${({ isOpen }) => isOpen && css``}
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    ${({ isSideMenu }) =>
      isSideMenu &&
      css`
        position: absolute;
        left: 0;
        top: 0;
        height: 100vh;
        flex-direction: column;
        background: red;
        z-index: 100;
      `}
  }
`;

export const Welcome = styled.p`
  font-size: 14px;
`;
