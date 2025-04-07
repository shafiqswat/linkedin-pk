/** @format */

import { z } from "zod";

export const baseSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  userName: z.string().min(3, "Username must be at least 3 characters"),
});

export const formSchemaLogin = baseSchema.pick({
  email: true,
  password: true,
});

export const formSchemaSignUp = baseSchema.pick({
  email: true,
  password: true,
  userName: true,
});

export type FormSchemaLogin = z.infer<typeof formSchemaLogin>;
export type FormSchemaSignUp = z.infer<typeof formSchemaSignUp>;

export type InputFieldType = {
  name: keyof FormSchemaLogin | keyof FormSchemaSignUp;
  type: string;
  placeholder: string;
};
