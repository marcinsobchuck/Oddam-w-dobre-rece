import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 210px;
  max-width: 674px;
  width: 100%;
  align-self: flex-start;

  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    margin-top: 60px;
    align-self: center;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: center;
  letter-spacing: -0.76px;
  font-weight: 400;
  :nth-of-type(2) {
    margin-bottom: 25px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-self: center;
  margin-top: 60px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screens.laptop}) {
    margin-bottom: 60px;
  }
`;
