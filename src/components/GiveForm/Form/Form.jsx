import React, { useState, useEffect, useContext } from "react";
import { FormWrapper, StepsContainer } from "./Form.styled";
import { ThankYou } from "./ThankYou/ThankYou";
import { Summary } from "./Summary/Summary";
import { Important } from "./Important/Important";
import { StepOne } from "./StepOne/StepOne";
import { StepTwo } from "./StepTwo/StepTwo";
import { StepThree } from "./StepThree/StepThree";
import { StepFour } from "./StepFour/StepFour";
import { AuthContext } from "../../../context";

export const Form = () => {
  // const [activeStep, setActiveStep] = useState(stepsCounter);
  const { activeStep, setActiveStep } = useContext(AuthContext);

  let stepsCounter = activeStep;

  const [summary, setSummary] = useState({
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

  const handleNextClick = () => {
    stepsCounter++;
    setActiveStep(stepsCounter);
  };

  const handlePrevClick = () => {
    stepsCounter--;
    setActiveStep(stepsCounter);
  };

  useEffect(() => {
    console.log(summary);
    console.log(activeStep);
  }, [activeStep, summary]);

  const renderImportant = () => {
    switch (activeStep) {
      case 1:
        return (
          <Important text="Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać." />
        );
      case 2:
        return (
          <Important text="Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ." />
        );
      case 3:
        return (
          <Important text="Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy." />
        );
      case 4:
        return <Important text="Podaj adres oraz termin odbioru rzeczy." />;
      case 5:
        return null;
      default:
        return null;
    }
  };

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
            summary={summary}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        );
      case 3:
        return (
          <StepThree
            summary={summary}
            setSummary={setSummary}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        );
      case 4:
        return (
          <StepFour
            setSummary={setSummary}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        );
      case 5:
        return (
          <Summary
            summary={summary}
            setSummary={setSummary}
            handlePrevClick={handlePrevClick}
            setActiveStep={setActiveStep}
          />
        );
      case 6:
        return <ThankYou activeStep={activeStep} />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderImportant()}
      <FormWrapper>
        {stepsCounter === 5 || stepsCounter === 6 ? (
          <StepsContainer sum>{renderSteps()}</StepsContainer>
        ) : (
          <StepsContainer>{renderSteps()}</StepsContainer>
        )}
      </FormWrapper>
    </>
  );
};
