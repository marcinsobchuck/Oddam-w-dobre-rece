import React from "react";

import { Decoration } from "../Decoration/Decoration";
import { AboutUsContainer, InfoBox, Image } from "./AboutUs.styled";
import signature from "../../assets/icons/Signature.svg";

export const AboutUs = () => {
  return (
    <AboutUsContainer id="about_Us">
      <InfoBox>
        <div>
          <h1>O nas</h1>
          <Decoration />
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
