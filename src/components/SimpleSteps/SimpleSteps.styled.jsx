import styled from "styled-components";

export const StepsWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  margin-bottom: 35px;
`;

export const SimpleStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55px;
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 45px;
  h1 {
    font-size: 38px;
    letter-spacing: -0.76px;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 400;
    margin-bottom: 30px;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
  justify-content: space-between;
  padding: 75px 0;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 170px;
  align-items: center;
  img {
    height: 83px;
    width: 83px;
  }
  h4 {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.fontColor};
    margin-top: 10px;
    ::after {
      content: "";
      margin: 10px auto;
      display: block;
      height: 1px;
      width: 100px;
      background-color: ${({ theme }) => theme.colors.fontColor};
    }
  }
  p {
    text-align: center;
  }
`;
