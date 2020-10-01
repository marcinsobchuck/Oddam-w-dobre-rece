import React, { useState, useEffect } from "react";
import { FormWrapper, StepsContainer } from "./Form.styled";
import { Summary } from "./Summary/Summary";
import { Important } from "./Important/Important";
import { StepOne } from "./StepOne/StepOne";
import { StepTwo } from "./StepTwo/StepTwo";
import { StepThree } from "./StepThree/StepThree";

let stepsCounter = 3;

export const Form = () => {
  const [activeStep, setActiveStep] = useState(stepsCounter);
  const [summary, setSummary] = useState({
    toWho: [],
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

  const handleNextClick = () => {
    stepsCounter++;
    setActiveStep(stepsCounter);
  };

  console.log(summary);

  const handlePrevClick = () => {
    stepsCounter--;
    setActiveStep(stepsCounter);
  };

  const renderImportant = () => {
    switch (activeStep) {
      case 1:
        return <Important text="1" />;
      case 2:
        return <Important text="2" />;
      case 3:
        return <Important text="3" />;
      case 4:
        return <Important text="4" />;
      case 5:
        return null;
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(summary);
  }, [summary]);

  const renderSteps = () => {
    switch (activeStep) {
      case 1:
        return (
          <StepOne
            setSummary={setSummary}
            handleNextClick={handleNextClick}
            summary={summary}
          />
        );
      case 2:
        return (
          <StepTwo
            setSummary={setSummary}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        );
      case 3:
        return (
          <StepThree
            setSummary={setSummary}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        );
      // case 4:
      //   return <Important text="4" />;
      // case 5:
      //   return <Summary />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderImportant()}
      <FormWrapper>
        <StepsContainer>{renderSteps()}</StepsContainer>
      </FormWrapper>
    </>
  );
};
