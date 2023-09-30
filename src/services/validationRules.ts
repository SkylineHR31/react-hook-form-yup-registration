import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validationSchema';

export const validationRules = {
  resolver: yupResolver(validationSchema),
};
