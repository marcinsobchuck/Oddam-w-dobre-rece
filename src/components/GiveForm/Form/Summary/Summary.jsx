import React, { useContext } from "react";
import icon1 from "../../../../assets/icons/Icon-1.svg";
import icon2 from "../../../../assets/icons/Icon-2.svg";
import {
  Title,
  Wrapper,
  BoxTitle,
  InfoWrapper,
  InfoRow,
  InfoBox,
  AddressPickupWrapper,
  SummaryWrapper,
  AddressPickupBox,
  AddressPickupRow,
} from "./Summary.styled";
import { StyledButton, ButtonsWrapper } from "../Button/Button.styled";
import { AuthContext } from "../../../../context";

export const Summary = ({ summary, setSummary, handlePrevClick }) => {
  let { quantity, item, recipient, address, localisation, pickup } = summary;

  const { setActiveStep } = useContext(AuthContext);

  const presentRecipient = recipient.join(", ");

  if (quantity === "1") {
    quantity = `${quantity} worek`;
  } else if (quantity === "5") {
    quantity = `${quantity} worków`;
  } else {
    quantity = `${quantity} worki`;
  }

  const handleNextClick = () => {
    setActiveStep(6);
    setSummary({
      item: "",
      quantity: "",
      recipient: "",
      localisation: "",
      organisation: "",
      address: {
        street: "",
        city: "",
        postalCode: "",
        phone: "",
      },
      pickup: {
        date: "",
        hour: "",
        comments: "",
      },
    });
  };

  return (
    <Wrapper>
      <SummaryWrapper>
        <Title>Podsumowanie Twojej darowizny</Title>
        <InfoWrapper>
          <BoxTitle>Oddajesz:</BoxTitle>
          <InfoBox>
            <InfoRow>
              <img src={icon1} alt="t-shirt icon" />
              <p>
                {quantity}, {item}, {presentRecipient}
              </p>
            </InfoRow>
            <InfoRow>
              <img src={icon2} alt="t-shirt icon" />
              <p> dla lokalizacji: {localisation}</p>
            </InfoRow>
          </InfoBox>
        </InfoWrapper>
        <AddressPickupWrapper>
          <AddressPickupBox address>
            <BoxTitle>Adres odbioru:</BoxTitle>
            <AddressPickupRow>
              <div>Ulica</div>
              <div>{address.street}</div>
            </AddressPickupRow>
            <AddressPickupRow>
              <div>Miasto</div>
              <div>{address.city}</div>
            </AddressPickupRow>
            <AddressPickupRow>
              <div>Kod pocztowy</div>
              <div>{address.postalCode}</div>
            </AddressPickupRow>
            <AddressPickupRow>
              <div>Numer telefonu</div>
              <div>{address.phone}</div>
            </AddressPickupRow>
          </AddressPickupBox>
          <AddressPickupBox>
            <BoxTitle>Termin odbioru:</BoxTitle>
            <AddressPickupRow>
              <div>Data</div>
              <div>{pickup.date}</div>
            </AddressPickupRow>
            <AddressPickupRow>
              <div>Godzina</div>
              <div>{pickup.hour}</div>
            </AddressPickupRow>
            <AddressPickupRow>
              <div>Uwagi dla kuriera</div>
              <div>
                <div>{pickup.comments}</div>
              </div>
            </AddressPickupRow>
          </AddressPickupBox>
        </AddressPickupWrapper>
      </SummaryWrapper>
      <ButtonsWrapper>
        <StyledButton previous type="button" onClick={handlePrevClick}>
          Wstecz
        </StyledButton>
        <StyledButton type="button" onClick={handleNextClick}>
          Potwierdzam
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
