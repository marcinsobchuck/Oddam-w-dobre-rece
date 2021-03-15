import styled from "styled-components";

export const Row = styled.div`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  :last-of-type {
    margin-bottom: 0;
  }
  div:first-child {
  }
  div:nth-of-type(2) {
    width: 60%;
  }
  div:last-of-type {
    div {
      word-wrap: break-word;
      width: 100%;
    }
  }
`;

export const NameStyled = styled.div`
  margin-right: 35px;
  width: 25%;
`;

export const InfoStyled = styled.div`
  width: 60%;
  :last-of-type {
    word-wrap: break-word;
    width: 100%;
  }
`;
