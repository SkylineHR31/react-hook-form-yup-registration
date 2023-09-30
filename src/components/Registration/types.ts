export type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  paymentMethod: "PayPal" | "Credit Card";
  paymentDetails: string;
};

export type PostData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  paymentMethod: PaymentMethod;
};

interface PaymentMethod {
  type: string;
  email: string;
}
