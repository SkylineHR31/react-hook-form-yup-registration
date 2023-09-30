import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../../services/validationSchema";
import FullNameStep from "./Steps/FullNameStep";
import EmailPasswordStep from "./Steps/EmailPasswordStep";
import PaymentMethodStep from "./Steps/PaymentMethodStep";
import { FormWrapper } from "./styled";
import { Button } from "@mui/material";
import { FormValues, PostData } from "./types";

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
    let _data: PostData = {
      firstName: data.fullName.split(" ")[0],
      lastName: data.fullName.split(" ")[1],
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      paymentMethod: data.paymentMethod === "PayPal" ? {
        type: "pp",
        email: data.paymentDetails,
      } : {
        type: "cc",
        email: data.paymentDetails,
      }
    };
    console.log(_data);

    return _data
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
