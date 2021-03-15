import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 45px;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  justify-content: space-between;
`;
export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BoxTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-bottom: 34px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img {
    margin-right: 20px;
    height: 50px;
    width: 50px;
  }
  p {
    font-size: 24px;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddressPickupWrapper = styled.div`
  display: flex;
  width: 60%;
`;

export const SummaryBox = styled.div`
  display: flex;
  flex-direction: column;
  :first-of-type {
    width: 40%;
  }
  :nth-of-type(2) {
    width: 60%;
  }
`;
