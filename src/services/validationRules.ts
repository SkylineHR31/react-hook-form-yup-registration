import { yupResolver } from "@hookform/resolvers/yup";
import { fullNameValidationSchema } from "./fullNameSchema";
import { emailPasswordValidationSchema } from "./emailPasswordSchema";
import { paymentMethodValidationSchema } from "./paymentMethodScheme";

export const validationRules = {
  fullName: {
    resolver: yupResolver(fullNameValidationSchema),
  },
  emailPassword: {
    resolver: yupResolver(emailPasswordValidationSchema),
  },
  paymentMethod: {
    resolver: yupResolver(paymentMethodValidationSchema),
  },
};
