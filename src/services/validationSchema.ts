import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('First and last name are required')
    .matches(/^[a-zA-Z]+\s[a-zA-Z]+$/, 'Please enter your full name in format "Name Surname"')
    .test('words-count', 'Minimum 2 words', (value) => {
      const words = value?.split(' ') || [];
      return words.length >= 2;
    })
    .test('word-length', 'Minimum 3 symbols in every word', (value) => {
      const words = value?.split(' ') || [];
      return words.every((word) => word.length >= 3);
    }),
  email: yup.string().email('Wrong email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should contains at least 8 symbols')
    .matches(/[A-Z]/, 'Password should contains at least 1 capital character')
    .matches(/\d/, 'Password should contains at least 1 digit')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must be equal')
    .required('Password confirmation is required'),
  paymentMethod: yup.string().oneOf(['PayPal', 'Credit Card'], 'Please select payment method').required('Payment method is required'),
  paymentDetails: yup.string().test('payment-details', 'Wrong payment data', function (value) {
    const method = this.parent.paymentMethod;
    if (method === 'PayPal') {
      return yup.string().email('Please enter correct Email for PayPal').isValidSync(value);
    } else if (method === 'Credit Card') {
      return yup.string().matches(/^\d{16}$/, 'Card number should contain 16 digits').isValidSync(value);
    }
    return true;
  }),
});
