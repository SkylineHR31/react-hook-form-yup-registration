import React from "react";
import { Controller } from "react-hook-form";
import { StepTitle, StepWrapper } from "./styled";
import { Alert, TextField } from "@mui/material";

type EmailPasswordInputProps = {
  control: any; // костыль
  emailName: string;
  passwordName: string;
  confirmPasswordName: string;
  errors: any; // костыль
};

const EmailPasswordStep: React.FC<EmailPasswordInputProps> = ({
  control,
  emailName,
  passwordName,
  confirmPasswordName,
  errors,
}) => {
  return (
    <StepWrapper>
      <StepTitle component="label" htmlFor={emailName}>
        Email:
      </StepTitle>
      <Controller
        name={emailName}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            id={emailName}
            {...field}
          />
        )}
      />
      {!!errors[emailName] && (
        <Alert severity="error">{errors[emailName]?.message}</Alert>
      )}

      <StepTitle component="label" htmlFor={passwordName}>
        Password:
      </StepTitle>
      <Controller
        name={passwordName}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Password"
            id={passwordName}
            type="password"
            {...field}
          />
        )}
      />
      {!!errors[passwordName] && (
        <Alert severity="error">{errors[passwordName]?.message}</Alert>
      )}

      <StepTitle component="label" htmlFor={confirmPasswordName}>
        Password confirmation:
      </StepTitle>
      <Controller
        name={confirmPasswordName}
        control={control}
        render={({ field }) => (
          <TextField
            fullWidth
            variant="filled"
            label="Password confirmation"
            id={confirmPasswordName}
            type="password"
            {...field}
          />
        )}
      />
      {!!errors[confirmPasswordName] && (
        <Alert severity="error">{errors[confirmPasswordName]?.message}</Alert>
      )}
    </StepWrapper>
  );
};

export default EmailPasswordStep;
