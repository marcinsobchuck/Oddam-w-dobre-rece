import React, { useState } from "react";

import { HelpFoundations } from "./HelpFoundations/HelpFoundations";
import { HelpLocal } from "./HelpLocal/HelpLocal";
import { HelpOrganisations } from "./HelpOrganisations/HelpOrganisations";
import { Decoration } from "../Decoration/Decoration";
import {
  Wrapper,
  HelpTargetContainer,
  HelpInfoContainer,
  ButtonsWrapper,
} from "./Help.styled";
import { Button } from "../Button/Button";

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
    <Wrapper id="help">
      <HelpInfoContainer>
        <h1>Komu pomagamy?</h1>
        <Decoration />
        <ButtonsWrapper>
          <Button
            name="Fundacjom"
            active={activeTab === TARGETS.foundations}
            onClick={() => handleClick(TARGETS.foundations)}
            helpBtn
          />

          <Button
            name="Organizacjom pozarządowym"
            active={activeTab === TARGETS.organisations}
            onClick={() => handleClick(TARGETS.organisations)}
            helpBtn
            center
          />

          <Button
            name="Lokalnym zbiórkom"
            active={activeTab === TARGETS.local}
            onClick={() => handleClick(TARGETS.local)}
            helpBtn
          />
        </ButtonsWrapper>
      </HelpInfoContainer>
      <HelpTargetContainer>{renderContent()}</HelpTargetContainer>
    </Wrapper>
  );
};
