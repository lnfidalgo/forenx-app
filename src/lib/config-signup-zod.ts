'use client'

import { z } from 'zod'

export const formSchema = z
  .object({
    username: z
      .string({
        required_error: 'Username is required',
      })
      .min(2, 'User name must have at least 2 characters')
      .max(12, 'Username must be up to 12 characters')
      .regex(new RegExp('^[a-zA-Z0-9]+$'), 'No special characters allowed!'),
    email: z.string({ required_error: 'Email is required' }).email('Please enter a valid email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must have at least 6 characters')
      .max(20, 'Password must be up to 20 characters'),
    confirmPassword: z
      .string({ required_error: 'Confirm your password is required' })
      .min(6, 'Password must have at least 6 characters')
      .max(20, 'Password must be up to 20 characters'),
    role: z
      .string(),
  })
  .refine(values => values.password === values.confirmPassword, {
    message: "Password and Confirm Password doesn't match!",
    path: ['confirmPassword'],
  })