import React from "react";
import { Controller } from "react-hook-form";
import { StepTitle, StepWrapper } from "./styled";
import {
  Alert,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

type PaymentMethodInputProps = {
  control: any; // костыль
  name: string;
  errors: any; // костыль
  selectedMethod: "PayPal" | "Credit Card";
};

const PaymentMethodStep: React.FC<PaymentMethodInputProps> = ({
  control,
  name,
  errors,
  selectedMethod,
}) => {
  return (
    <>
      <StepWrapper>
        <StepTitle component="label" htmlFor={name}>
          Payment method:
        </StepTitle>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              defaultValue="PayPal"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="PayPal"
                control={<Radio />}
                label="PayPal"
              />
              <FormControlLabel
                value="Credit Card"
                control={<Radio />}
                label="Credit Card"
              />
            </RadioGroup>
          )}
        />
        {!!errors[name] && (
          <Alert severity="error">{errors[name]?.message}</Alert>
        )}
      </StepWrapper>
      <StepWrapper>
        <StepTitle component="label" htmlFor={name}>
          {selectedMethod === "PayPal" ? "Email for PayPal:" : "Card number:"}
        </StepTitle>
        <Controller
          name="paymentDetails"
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
              variant="filled"
              label="Payment method details"
              id={name}
              {...field}
            />
          )}
        />
        {!!errors.paymentDetails && (
          <Alert severity="error">{errors.paymentDetails?.message}</Alert>
        )}
      </StepWrapper>
    </>
  );
};

export default PaymentMethodStep;
