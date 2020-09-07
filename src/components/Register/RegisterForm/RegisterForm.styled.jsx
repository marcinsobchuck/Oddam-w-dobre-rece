import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 40px 68px;
  background-color: #f0f1f1;
  margin-top: 60px;
  label {
    color: ${({ theme }) => theme.colors.fontColor};
    font-weight: 600;
  }
`;

export const InputBox = styled.div`
  margin-bottom: ${({ marginBot }) => (marginBot ? "10px" : "0px")};
`;

export const ButtonsWrapper = styled.div`
  width: 130%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Button = styled.button`
  padding: 13px 16px;
  font-size: 18px;
  font-weight: 300;
  background-color: transparent;
  outline: none;
  border: 0.75px solid
    ${({ register }) => (register ? "#3C3C3C" : "transparent")};
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: 0.75px solid ${({ theme }) => theme.colors.loginBorder};
  }
`;
