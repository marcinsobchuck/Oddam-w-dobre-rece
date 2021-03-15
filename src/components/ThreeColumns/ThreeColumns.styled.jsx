import styled from "styled-components";
import threeColumnsBg from "../../assets/images/3-Columns-Background.png";

export const ColumnsContainer = styled.section`
  background-image: url(${threeColumnsBg});
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 334px;
  height: 252px;
  margin: 46px 0 86px 0;

  h1 {
    color: ${({ theme }) => theme.colors.numbersColor};
    font-size: 90px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  h2 {
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: -0.36px;
    color: ${({ theme }) => theme.colors.fontColor};
    margin-bottom: 28px;
    text-align: center;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.fontAlt};
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.36px;
    text-align: center;
  }
`;
