import * as yup from "yup";

export const fullNameValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("First and last name are required")
    .matches(
      /^[a-zA-Z]+\s[a-zA-Z]+$/,
      'Please enter your full name in format "Name Surname"'
    )
    .test("words-count", "Minimum 2 words", (value) => {
      const words = value?.split(" ") || [];
      return words.length >= 2;
    })
    .test("word-length", "Minimum 3 symbols in every word", (value) => {
      const words = value?.split(" ") || [];
      return words.every((word) => word.length >= 3);
    }),
});
