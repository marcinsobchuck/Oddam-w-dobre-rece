import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  max-width: 680px;
  margin-right: 60px;
  margin-top: 110px;
  img {
    margin-top: 25px;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: center;
  letter-spacing: -0.76px;
  font-weight: 400;
`;

export const FourStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const FourStepsTitle = styled.h2`
  font-size: 40px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  margin-bottom: 75px;
`;

export const Squares = styled.div`
  width: 100%;
  display: flex;
`;

export const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.fontColor};
  width: 140px;
  height: 140px;
  transform: rotate(45deg);
  margin-right: 30px;
`;

export const SquareBox = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-45deg);
  padding-bottom: 30px;
  p {
    text-align: center;
  }
`;

export const Number = styled.p`
  font-size: 32px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const SquareText = styled.p`
  font-size: 22px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding: 0 12px;
`;
