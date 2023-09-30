import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ButtonsWrapper, StepTitle, StepWrapper, StyledButton } from "./styled";
import { Alert, TextField } from "@mui/material";
import { EmailPasswordInputProps } from "./types";

const EmailPasswordStep: React.FC<EmailPasswordInputProps> = ({
  emailName,
  passwordName,
  confirmPasswordName,
  onNextStep,
  onPrevStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  const onSubmit = () => {
    onNextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Alert severity="error">{errors[emailName]?.message as string}</Alert>
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
          <Alert severity="error">
            {errors[passwordName]?.message as string}
          </Alert>
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
          <Alert severity="error">
            {errors[confirmPasswordName]?.message as string}
          </Alert>
        )}
        <ButtonsWrapper component={"div"}>
          <StyledButton
            type="button"
            fullWidth
            variant="contained"
            onClick={onPrevStep}
          >
            Previous step
          </StyledButton>
          <StyledButton fullWidth variant="contained" type="submit">
            Next step
          </StyledButton>
        </ButtonsWrapper>
      </StepWrapper>
    </form>
  );
};

export default EmailPasswordStep;
