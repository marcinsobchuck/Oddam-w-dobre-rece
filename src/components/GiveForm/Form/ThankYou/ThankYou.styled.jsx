import styled from "styled-components";

export const InfoWrapper = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const Text = styled.h2`
  color: ${({ theme }) => theme.colors.fontColor};
  font-size: 40px;
  font-weight: 300;
  max-width: ${({ wide }) => (wide ? "45vw" : "30vw")};
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 60%;
`;
