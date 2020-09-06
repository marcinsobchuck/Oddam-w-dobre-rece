import styled from "styled-components";

export const Message = styled.div`
  color: ${({ isOk }) => (isOk ? "green" : "red")};
  font-size: 14px;
  margin-top: 3px;
  font-weight: 600;
`;
