import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters'), 
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneno: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only numbers')
    .matches(/^\d{10}$/, 'Phone number must contain exactly 10 digits'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(15, 'Password must be at most 15 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters')
    .max(15, 'Password must be at most 15 characters')
    .required('Password is required'),
});
