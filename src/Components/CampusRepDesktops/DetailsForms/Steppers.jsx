import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ContactDetailsForm from "../DetailsForms/ContactDetailsForm";
import SchoolDetailsForm from "../DetailsForms/SchoolDetailsForm";
import VasitiForm from "../DetailsForms/VasitiForm";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  stepperIcon: {
    color: "red",
    "& .MuiStepIcon-root.MuiStepIcon-active": {
      color: "#FF5C00"
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed": {
      color: "#FF5C00"
    }
  }
}));

export default function HorizontalLabelPositionBelowStepper() {
  function getSteps() {
    return ["Contact details", "School details", "Vasit"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <ContactDetailsForm
            onBack={handleBack}
            onNext={handleNext}
            onReset={handleReset}
          />
        );
      case 1:
        return (
          <SchoolDetailsForm
            onBack={handleBack}
            onNext={handleNext}
            onReset={handleReset}
          />
        );
      case 2:
        return (
          <VasitiForm
            onBack={handleBack}
            onNext={handleNext}
            onReset={handleReset}
          />
        );

      default:
        return "Unknown stepIndex";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel className={classes.stepperIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              {/* <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FF5C00", color: "#FFFFFF" }}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
