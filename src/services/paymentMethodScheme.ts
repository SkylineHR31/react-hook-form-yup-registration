
import * as yup from "yup";

export const paymentMethodValidationSchema = yup.object().shape({
    paymentMethod: yup
      .string()
      .oneOf(["PayPal", "Credit Card"], "Please select payment method")
      .required("Payment method is required"),
    paymentDetails: yup
      .string()
      .test("payment-details", "Wrong payment data", function (value) {
        const method = this.parent.paymentMethod;
        if (!value) return false;
        if (method === "PayPal") {
          return yup.string().email("Please enter correct Email for PayPal").isValidSync(value);
        } else if (method === "Credit Card") {
          return yup.string().matches(/^\d{16}$/, "Card number should contain 16 digits").isValidSync(value);
        }
        return true;
      }),
  });