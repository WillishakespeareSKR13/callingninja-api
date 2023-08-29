import { z } from "zod";

export const InputStorage = z.object({
  fileName: z.string().refine((val) => /\w+\.\w+/.test(val), {
    message: "fileName must be a string with extension",
  }),
});

export const OutputStorage = z.object({
  url: z.string(),
  signedUrl: z.string(),
});
