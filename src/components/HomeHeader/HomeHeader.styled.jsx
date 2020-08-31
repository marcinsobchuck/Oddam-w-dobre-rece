import styled from "styled-components";

export const HeaderContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: flex-end;

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-basis: 50%;
  }
`;

export const Hero = styled.img`
  position: absolute;
  left: -483px;
  height: 100vh;
`;
