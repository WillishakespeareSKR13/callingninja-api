import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Company = z.object({
  id: z.string(),
  userId: z.custom<Schema.Types.ObjectId>(),
  name: z.string(),
  description: z.string(),
  address: z.string(),
  image: z.string(),
  twillioSid: z.string(),
  twillioToken: z.string(),
  employees: z.array(z.custom<Schema.Types.ObjectId>()),
});

export type ICompany = z.infer<typeof Company>;

const CompanySchema = new Schema<ICompany>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    twillioSid: { type: String, required: true },
    twillioToken: { type: String, required: true },
    employees: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  Plugins.Mongo.Normalize()
);

CompanySchema.plugin(Plugins.Mongo.AutoPopulate);

const CompanyModel = model<ICompany>("Company", CompanySchema);

export default CompanyModel;
