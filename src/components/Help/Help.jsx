import React, { useState } from "react";

import { HelpFoundations } from "./HelpFoundations/HelpFoundations";
import { HelpLocal } from "./HelpLocal/HelpLocal";
import { HelpOrganisations } from "./HelpOrganisations/HelpOrganisations";
import decoration from "../../assets/icons/Decoration.svg";
import {
  Wrapper,
  HelpTargetContainer,
  HelpInfoContainer,
  ButtonContainer,
} from "./Help.styled";
import { Button } from "../../components/HomeHeader/HomeHeaderMain/HomeHeaderMain.styled";

export const TARGETS = {
  loggedIn: "loggedIn",
  foundations: "foundations",
  organisations: "organisations",
  local: "local",
};

export const Help = () => {
  const [activeTab, setActiveTab] = useState(TARGETS.foundations);

  const handleClick = (target) => {
    setActiveTab(target);
  };

  const renderContent = () => {
    switch (activeTab) {
      case TARGETS.foundations:
        return <HelpFoundations />;
      case TARGETS.organisations:
        return <HelpOrganisations />;
      case TARGETS.local:
        return <HelpLocal />;
      default:
        return null;
    }
  };
  return (
    <Wrapper>
      <HelpInfoContainer>
        <h1>Komu pomagamy?</h1>
        <img src={decoration} alt="decoration" />
        <ButtonContainer>
          <Button
            active={activeTab === TARGETS.foundations}
            onClick={() => handleClick(TARGETS.foundations)}
            helpBtn
          >
            Fundacjom
          </Button>
          <Button
            active={activeTab === TARGETS.organisations}
            onClick={() => handleClick(TARGETS.organisations)}
            helpBtn
            center
          >
            Organizacjom pozarządowym
          </Button>
          <Button
            active={activeTab === TARGETS.local}
            onClick={() => handleClick(TARGETS.local)}
            helpBtn
          >
            Lokalnym zbiórkom
          </Button>
        </ButtonContainer>
      </HelpInfoContainer>
      <HelpTargetContainer>{renderContent()}</HelpTargetContainer>
    </Wrapper>
  );
};
