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
  margin-left: 40px;
`;

export const Title = styled.h1`
  font-size: 38px;
  color: ${({ theme }) => theme.colors.fontColor};
  text-align: center;
  letter-spacing: -0.76px;
  margin-bottom: 25px;
  font-weight: 400;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 65px;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 38px;
  line-height: 45px;
  font-weight: 300;
  max-width: 310px;
  padding: 0 30px;
  height: 120px;
  background-color: transparent;
  border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  font-family: ${({ theme }) => theme.fonts.fontBase}, sans-serif;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.fontColor};
  outline: none;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
  }
`;
