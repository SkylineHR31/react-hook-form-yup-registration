import { Alert, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StepTitle, StepWrapper, StyledButton } from "./styled";
import { FullNameInputProps } from "./types";

const FullNameStep: React.FC<FullNameInputProps> = ({ name, onNextStep }) => {
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
        <StepTitle component="label" htmlFor={name}>
          First and last name:
        </StepTitle>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              variant="filled"
              label="Full name"
              id={name}
            />
          )}
        />
        {!!errors[name] && (
          <Alert severity="error">{errors[name]?.message as string}</Alert>
        )}
        <StyledButton type="submit" fullWidth variant="contained">
          Next step
        </StyledButton>
      </StepWrapper>
    </form>
  );
};

export default FullNameStep;
