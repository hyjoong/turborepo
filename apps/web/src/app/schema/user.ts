import { z } from "zod";

const passwordSchema = z
  .string()
  .regex(/^(?=.*[A-Z])/, "One uppercase letter.")
  .regex(/^(?=.*[a-z])/, "One lowercase letter.")
  .regex(/^(?=.*\d)/, "One digit.")
  .regex(/^(?=.*[\W_])/, "One special character.")
  .min(8, { message: "At least 8 characters." });

const emailSchema = z
  .string()
  .min(1, { message: "Email required." })
  .email({ message: "Invalid email." });

const nameSchema = z
  .string()
  .min(1, { message: "Name required." })
  .max(20, { message: "Less than 20 characters." });

const signUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignUpPayload = z.infer<typeof signUpSchema>;
export type LoginPayload = z.infer<typeof loginSchema>;

export const userSchemas = {
  signUpSchema,
  loginSchema,
};

export const userDefaultValues = {
  signUpDefaultValues: signUpSchema,
  loginDefaultValues: loginSchema,
};
