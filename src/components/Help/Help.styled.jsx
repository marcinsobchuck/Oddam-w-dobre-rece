import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 1300px;
  margin: 0 auto;
`;

export const HelpInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;

  h1 {
    font-size: 38px;
    letter-spacing: -0.38px;
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 400;
    margin-bottom: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 58px;
  max-width: 750px;
  width: 750px;
`;

export const HelpTargetContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;
