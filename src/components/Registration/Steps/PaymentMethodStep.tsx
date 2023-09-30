import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ButtonsWrapper, StepTitle, StepWrapper, StyledButton } from "./styled";
import {
  Alert,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { PaymentMethodInputProps } from "./types";
import { PostData } from "../types";

const PaymentMethodStep: React.FC<PaymentMethodInputProps> = ({
  name,
  onPrevStep,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext();

  const onSubmit = (data: any) => {
    let _data: PostData = {
      firstName: data.fullName.split(" ")[0],
      lastName: data.fullName.split(" ")[1],
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      paymentMethod:
        data.paymentMethod === "PayPal"
          ? {
              type: "pp",
              email: data.paymentDetails,
            }
          : {
              type: "cc",
              email: data.paymentDetails,
            },
    };
    console.log(_data);

    return _data;
  };

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Alert severity="error">{errors[name]?.message as string}</Alert>
        )}
      </StepWrapper>
      <StepWrapper>
        <StepTitle component="label" htmlFor={name}>
          {selectedPaymentMethod === "PayPal"
            ? "Email for PayPal:"
            : "Card number:"}
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
          <Alert severity="error">
            {errors.paymentDetails?.message as string}
          </Alert>
        )}
        <ButtonsWrapper component={"div"}>
          <StyledButton
            fullWidth
            type="button"
            variant="contained"
            onClick={onPrevStep}
          >
            Previous step
          </StyledButton>
          <StyledButton fullWidth type="submit" variant="contained">
            Submit
          </StyledButton>
        </ButtonsWrapper>
      </StepWrapper>
    </form>
  );
};

export default PaymentMethodStep;
