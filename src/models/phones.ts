import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Phones = z.object({
  id: z.string(),
  name: z.string(),
  phone: z.string(),
  companyId: z.custom<Schema.Types.ObjectId>(),
});

export type IPhones = z.infer<typeof Phones>;

const PhonesSchema = new Schema<IPhones>(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  },
  Plugins.Mongo.Normalize()
);

PhonesSchema.plugin(Plugins.Mongo.AutoPopulate);

const PhonesModel = model<IPhones>("Phones", PhonesSchema);

export default PhonesModel;
