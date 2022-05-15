import {
    Stepper,
    Step,
    StepLabel,
  } from "@mui/material";
//   import   '../CSS/Card_css.css';
  
const Stepper_Component = () => {
    const steps = ["Products", "date", "finalizing"];

    return (
        <Stepper activeStep={0} alternativeLabel className="mt stepper" color="secondary" >
            {steps.map((label) => (
                <Step key={label} >
                    <StepLabel >{label}</StepLabel>
                </Step>
            ))}
        </Stepper>);
}

export default Stepper_Component;