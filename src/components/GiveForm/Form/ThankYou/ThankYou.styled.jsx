import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 40px;
  font-weight: 300;
  max-width: ${({ wide }) => (wide ? "45vw" : "30vw")};
  text-align: center;
  :nth-of-type(2) {
    margin-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
`;

export const Info = styled.p`
  margin-top: 12px;
`;
