import React from "react";

import decoration from "../../assets/icons/Decoration.svg";
import signature from "../../assets/icons/Signature.svg";

import { AboutUsContainer, InfoBox, Image } from "./AboutUs.styled";

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <InfoBox>
        <div>
          <h1>O nas</h1>
          <img src={decoration} alt="decoration" />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={signature} alt="signature" />
        </div>
      </InfoBox>
      <Image />
    </AboutUsContainer>
  );
};
