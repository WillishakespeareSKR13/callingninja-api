import { z } from "zod";
import { User } from "../../models/user";

export const InputUser = User.pick({
  name: true,
  lastname: true,
  birthday: true,
  password: true,
  email: true,
  phone: true,
  phoneCode: true,
});

export const InputUserId = z.object({
  id: z.string(),
});

export const OutputUser = User.omit({
  password: true,
  token: true,
});
