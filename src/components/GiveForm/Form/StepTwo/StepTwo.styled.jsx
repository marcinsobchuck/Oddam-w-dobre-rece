import styled from "styled-components";
import arrowup from "../../../../assets/icons/Icon-Arrow-Up.svg";
import arrowdown from "../../../../assets/icons/Icon-Arrow-Down.svg";

export const Form = styled.form`
  max-width: 1600px;
  height: 60vh;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  input {
    margin-right: 30px;
    margin-top: 42px;
  }
  option[value=""][disabled] {
    display: none;
  }
`;

export const StepStatus = styled.p`
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.fontColor};
  padding-top: 36px;
  padding-bottom: 50px;
`;

export const ErrorStyled = styled.div`
  color: red;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleStyled = styled.h1`
  font-size: 32px;
  margin-bottom: 50px;
`;

export const LabelStyled = styled.label`
  font-size: 24px;
  font-weight: 300;
  padding-right: 24px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-bottom: 24px;
  select {
    cursor: pointer;
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
  }
  option {
    background-color: #ececea;
    font-size: 24px;
    font-weight: 300;
  }
`;
