import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.fontColor};
  letter-spacing: -0.8px;
  font-weight: 400;
  margin-bottom: 26px;
`;
