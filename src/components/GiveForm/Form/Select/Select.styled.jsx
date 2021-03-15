import styled from "styled-components";

import arrowup from "../../../../assets/icons/Icon-Arrow-Up.svg";
import arrowdown from "../../../../assets/icons/Icon-Arrow-Down.svg";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;

  select {
    margin-bottom: 18px;
    margin-left: ${({ isHorizontal }) => (isHorizontal ? "24px" : 0)};
    outline: none;
    width: 268px;
    font-size: 24px;
    font-weight: 300;
    padding: 10px;
    border: 0.75px solid #3c3c3c;
    background: ${({ active }) =>
      active
        ? `url(${arrowup}) no-repeat right transparent`
        : `url(${arrowdown}) no-repeat right transparent`};
    -webkit-appearance: none;
    background-position-x: 215px;
    cursor: pointer;
    option {
      background-color: #ececea;
      font-size: 24px;
      font-weight: 300;
    }
    option[value=""][disabled] {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const ErrorStyled = styled.div`
  color: red;
  font-size: 16px;
  div {
    visibility: hidden;
  }
`;

export const SelectBox = styled.div`
  display: ${({ isHorizontal }) => isHorizontal && "flex"};
`;
