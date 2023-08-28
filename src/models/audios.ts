import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Audios = z.object({
  id: z.string(),
  name: z.string(),
  fileName: z.string(),
  ext: z.string(),
  url: z.string(),
  signedUrl: z.string(),
  companyId: z.custom<Schema.Types.ObjectId>(),
  status: z.enum(["pending", "uploaded", "error"]).default("pending"),
});

export type IAudios = z.infer<typeof Audios>;

const AudiosSchema = new Schema<IAudios>(
  {
    name: { type: String, required: true },
    fileName: { type: String, required: true },
    ext: { type: String, required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    url: { type: String },
    signedUrl: { type: String },
    status: {
      type: String,
      enum: ["pending", "uploaded", "error"],
      default: "pending",
    },
  },
  Plugins.Mongo.Normalize()
);

AudiosSchema.plugin(Plugins.Mongo.AutoPopulate);

const AudiosModel = model<IAudios>("Audio", AudiosSchema);

export default AudiosModel;
