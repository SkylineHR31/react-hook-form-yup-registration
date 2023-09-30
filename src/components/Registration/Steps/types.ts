export type FullNameInputProps = {
  name: string;
  onNextStep: () => void;
};

export type EmailPasswordInputProps = {
  emailName: string;
  passwordName: string;
  confirmPasswordName: string;
  onNextStep: () => void;
  onPrevStep: () => void;
};

export type PaymentMethodInputProps = {
  name: string;
  onPrevStep: () => void;
};
