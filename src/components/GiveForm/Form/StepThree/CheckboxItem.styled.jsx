import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  pointer-events: none;

  :hover input ~ span {
    background-color: transparent;
  }
  input:checked ~ span {
    background-color: ${({ theme }) => theme.colors.loginBorder};
    transition: 0.2s;
  }
  input:checked ~ span:after {
    display: block;
  }

  input {
    position: absolute;
    z-index: 9999;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const StyledCheckbox = styled.span`
  pointer-events: all;
  font-size: 24px;
  font-weight: 300;
  display: block;
  background-color: transparent;
  max-width: 300px;
  padding: 11px 26px;
  margin-right: 24px;
  margin-bottom: ${({ bottomrow }) => (bottomrow ? "18px" : "24px")};
  border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
  cursor: pointer;
`;
