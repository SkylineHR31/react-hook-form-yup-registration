import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { fullNameValidationSchema } from "../../services/fullNameSchema";
import { useState } from "react";
import FullNameStep from "./Steps/FullNameStep";
import EmailPasswordStep from "./Steps/EmailPasswordStep";
import PaymentMethodStep from "./Steps/PaymentMethodStep";
import { Typography } from "@mui/material";
import { FormWrapper } from "./styled";
import { FormValues } from "./types";
import { emailPasswordValidationSchema } from "../../services/emailPasswordSchema";
import { paymentMethodValidationSchema } from "../../services/paymentMethodScheme";

function RegistrationForm() {
  const [step, setStep] = useState(1);

  const getValidationSchema = () => {
    switch (step) {
      case 1:
        return yupResolver(fullNameValidationSchema);
      case 2:
        return yupResolver(emailPasswordValidationSchema);
      case 3:
        return yupResolver(paymentMethodValidationSchema);
      default:
        return yupResolver(fullNameValidationSchema);
    }
  };
  const methods = useForm<FormValues, any>({
    resolver: getValidationSchema() as any,
  });

  const onNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const onPrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <Typography component="h1" fontSize="32px" textAlign="center">
        Registration Form
      </Typography>
      <FormWrapper component="div">
        {step === 1 && <FullNameStep name="fullName" onNextStep={onNextStep} />}
        {step === 2 && (
          <EmailPasswordStep
            emailName="email"
            passwordName="password"
            confirmPasswordName="confirmPassword"
            onNextStep={onNextStep}
            onPrevStep={onPrevStep}
          />
        )}
        {step === 3 && (
          <PaymentMethodStep name="paymentMethod" onPrevStep={onPrevStep} />
        )}
      </FormWrapper>
    </FormProvider>
  );
}

export default RegistrationForm;
