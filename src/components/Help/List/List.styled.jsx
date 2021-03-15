import styled, { css } from "styled-components";

export const Title = styled.h2`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.fontBase};
  text-align: center;
  max-width: 640px;
  font-weight: 400;
  margin-bottom: 66px;
`;

export const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  :nth-child(3n) {
    border-bottom: 0.75px solid transparent;
  }
`;
export const ListItemsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  font-family: ${({ theme }) => theme.fonts.fontAlt};

  ${({ rowTitle }) =>
    rowTitle &&
    css`
      font-size: 28px;
      margin-bottom: 6px;
    `}

  ${({ centered }) =>
    centered &&
    css`
      line-height: 56px;
    `}
`;
