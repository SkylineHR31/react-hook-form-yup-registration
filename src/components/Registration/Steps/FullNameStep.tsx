import { Alert, Box, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { StepTitle, StepWrapper } from "./styled";

type FullNameInputProps = {
  control: any; // костыль
  name: string;
  errors: any; // костыль
};

const FullNameStep: React.FC<FullNameInputProps> = ({
  control,
  name,
  errors,
}) => {
  return (
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
        <Alert severity="error">{errors[name]?.message}</Alert>
      )}
    </StepWrapper>
  );
};

export default FullNameStep;
