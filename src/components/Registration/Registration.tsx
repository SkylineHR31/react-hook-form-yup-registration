import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../services/validationSchema";
import FullNameStep from "./Steps/FullNameStep";
import EmailPasswordStep from "./Steps/EmailPasswordStep";
import PaymentMethodStep from "./Steps/PaymentMethodStep";
import { FormWrapper } from "./styled";
import { Button } from "@mui/material";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  paymentMethod: "PayPal" | "Credit Card";
  paymentDetails: string;
};

function RegistrationForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema) as any, // костыль, знаю :)
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      paymentMethod: "PayPal",
      paymentDetails: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const selectedPaymentMethod = watch("paymentMethod");

  return (
    <FormWrapper component="form" onSubmit={handleSubmit(onSubmit)}>
      <FullNameStep control={control} name="fullName" errors={errors} />
      <EmailPasswordStep
        control={control}
        emailName="email"
        passwordName="password"
        confirmPasswordName="confirmPassword"
        errors={errors}
      />
      <PaymentMethodStep
        control={control}
        name="paymentMethod"
        errors={errors}
        selectedMethod={selectedPaymentMethod}
      />
      <Button type="submit" fullWidth variant="contained">
        Submit
      </Button>
    </FormWrapper>
  );
}

export default RegistrationForm;
