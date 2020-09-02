import React, { useState } from "react";

export const TARGETS = {
  loggedIn: "loggedIn",
  foundations: "foundations",
  organisations: "organisations",
  local: "local",
};

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState();

  const renderContent = () => {
    switch (activeTab) {
      case TARGETS.loggedIn:
        return "1";
      case TARGETS.organisations:
        return "2";
      case TARGETS.local:
        return "3";
      default:
        return null;
    }
  };

  return (
    <div>
      <span onClick={() => setActiveTab(TARGETS.loggedIn)}>Zalogowano</span>
      <span onClick={() => setActiveTab(TARGETS.organisations)}>
        Organizacjom pozarządowym
      </span>
      <span onClick={() => setActiveTab(TARGETS.local)}>Lokalnym zbiórkom</span>
      <div>{renderContent()}</div>
    </div>
  );
};
