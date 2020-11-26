import styled from "styled-components";
import arrowup from "../../../../assets/icons/Icon-Arrow-Up.svg";
import arrowdown from "../../../../assets/icons/Icon-Arrow-Down.svg";

export const Form = styled.form`
  max-width: 1600px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  option[value=""][disabled] {
    display: none;
  }
`;
export const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  margin-bottom: 50px;
`;

export const ErrorStyled = styled.div`
  color: red;
  font-size: 16px;
  div {
    visibility: hidden;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  select {
    margin-bottom: 18px;
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
  }
`;

export const CheckboxFormWrapper = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  display: flex;
  flex-direction: column;
`;

export const CheckboxWrapper = styled.div`
  label {
    display: flex;
    pointer-events: none;
  }
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

export const CheckboxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
`;

export const OrganisationFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
  div {
    display: flex;
    flex-direction: column;
    input {
      outline: none;
      background-color: transparent;
      padding: 4px 10px;
      border: 0.75px solid ${({ theme }) => theme.colors.fontColor};
      font-size: 24px;
      color: ${({ theme }) => theme.colors.fontColor};
    }
  }
`;
