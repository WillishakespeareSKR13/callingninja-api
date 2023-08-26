import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Company = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  twillio_sid: z.string(),
  twillio_token: z.string(),
});

export type ICompany = z.infer<typeof Company>;

const CompanySchema = new Schema<ICompany>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    twillio_sid: { type: String, required: true },
    twillio_token: { type: String, required: true },
  },
  Plugins.Mongo.Normalize()
);

const CompanyModel = model<ICompany>("Company", CompanySchema);

export default CompanyModel;
