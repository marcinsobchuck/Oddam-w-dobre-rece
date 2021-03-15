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
  SummaryBox,
} from "./Summary.styled";
import Moment from "moment";
import { ButtonsWrapper } from "../ButtonsWrapper.styled";
import { Button } from "../../../Button/Button";
import { AuthContext } from "../../../../context";
import { SummaryRow } from "./SummaryRow";

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
          <SummaryBox address>
            <BoxTitle>Adres odbioru:</BoxTitle>
            <SummaryRow name="Ulica" info={address.street} />
            <SummaryRow name="Miasto" info={address.city} />
            <SummaryRow name="Kod pocztowy" info={address.postalCode} />
            <SummaryRow name="Numer telefonu" info={address.phone} />
          </SummaryBox>
          <SummaryBox>
            <BoxTitle>Termin odbioru:</BoxTitle>
            <SummaryRow
              name="Data"
              info={Moment(pickup.date).format("DD-MM-YYYY")}
            />
            <SummaryRow
              name="Godzina"
              info={Moment(pickup.hour).format("HH:mm")}
            />
            <SummaryRow name="Uwagi dla kuriera" info={pickup.comments} />
          </SummaryBox>
        </AddressPickupWrapper>
      </SummaryWrapper>
      <ButtonsWrapper>
        <Button
          name="wstecz"
          previous
          type="button"
          onClick={handlePrevClick}
        />
        <Button name="dalej" type="button" onClick={handleNextClick} />
      </ButtonsWrapper>
    </Wrapper>
  );
};
