import { z } from "zod";
import { Audios } from "../../models/audios";

export const InputAudiosSignedUrl = z.object({
  fileName: z.string().refine((val) => /\w+\.\w+/.test(val), {
    message: "fileName must be a string with extension",
  }),
  companyId: z.string(),
});

export const InputAudiosGet = Audios.pick({
  status: true,
}).optional();

export const InputUpdateAudios = Audios.omit({
  id: true,
});

export const InputAudiosByCompanyId = z.object({
  id: z.string(),
});

export const InputAudiosId = Audios.pick({
  id: true,
});

export const OutputAudios = Audios.extend({
  signedUrl: z.string(),
});
