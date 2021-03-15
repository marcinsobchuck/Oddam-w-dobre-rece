import styled from "styled-components";

export const HeaderContainer = styled.section`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  max-width: 1600px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.screens.smallDesktop}) {
    margin-right: 60px;
  }
  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    margin-right: 0;
  }
`;

export const HomeHeaderWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    position: static;
    height: 100vh;
  }
`;

export const Hero = styled.img`
  position: absolute;
  left: -600px;
  height: 100vh;

  @media (max-width: ${({ theme }) => theme.screens.smallDesktop}) {
    position: relative;
    left: -800px;
  }
  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    display: none;
  }
`;

export const LaptopImage = styled.img`
  display: none;

  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    display: block;
    width: 100vw;
    object-fit: cover;
    position: absolute;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    position: relative;
    width: 100vw;
    flex-grow: 1;
  }
`;
