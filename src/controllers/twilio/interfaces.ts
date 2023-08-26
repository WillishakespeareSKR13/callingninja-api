import { z } from "zod";

export const Twilio = z.object({
  message: z.string(),
});

export const OutputTwilio = Twilio;
