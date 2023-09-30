import * as yup from "yup";

export const emailPasswordValidationSchema = yup.object().shape({
    email: yup.string().email("Wrong email format").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should contain at least 8 characters")
      .matches(/[A-Z]/, "Password should contain at least 1 capital character")
      .matches(/\d/, "Password should contain at least 1 digit")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Password confirmation is required"),
  });