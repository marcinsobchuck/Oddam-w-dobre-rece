import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 100vh;
`;

export const Hero = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 50%;
`;

export const FormSteps = styled.form``;

export const HeaderSection = styled.header``;

export const Arrow = styled.div`
  ::after {
    font-size: 38px;
    position: absolute;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    content: "\f063";
    cursor: pointer;
  }
`;
