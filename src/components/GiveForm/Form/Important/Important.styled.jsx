import styled from "styled-components";

export const ImportantWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.loginBorder};
  height: 20vh;
`;

export const ImportantContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 50px 0;
`;

export const ImportantTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #000000;
`;

export const ImportantText = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fontColor};
`;
