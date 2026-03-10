import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  age: z
    .number({
      invalid_type_error: "Age must be a number"
    })
    .min(18, "You must be at least 18"),

  gender: z
    .string()
    .nonempty("Please select a gender"),

  terms: z
    .boolean()
    .refine(val => val === true, {
      message: "You must accept terms"
    })
});