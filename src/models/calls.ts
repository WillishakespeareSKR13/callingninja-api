import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Call = z.object({
  id: z.string(),
  sid: z.string(),
  userId: z.custom<Schema.Types.ObjectId>(),
  companyId: z.custom<Schema.Types.ObjectId>(),
  to: z.string(),
  toCountry: z.string().nullish(),
  toState: z.string().nullish(),
  toCity: z.string().nullish(),
  from: z.string(),
  fromCountry: z.string().nullish(),
  fromState: z.string().nullish(),
  fromCity: z.string().nullish(),
  status: z.string(),
  duration: z.number().nullish(),
  price: z.number().nullish(),
  priceUnit: z.string(),
  callStart: z.coerce.date().nullish(),
  callEnd: z.coerce.date().nullish(),
});

export type ICall = z.infer<typeof Call>;

const CallSchema = new Schema<ICall>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    sid: { type: String, required: true },
    to: { type: String, required: true },
    from: { type: String, required: true },
    fromCountry: { type: String },
    fromState: { type: String },
    fromCity: { type: String },
    toCountry: { type: String },
    toState: { type: String },
    toCity: { type: String },
    status: { type: String, required: true },
    priceUnit: { type: String, default: "USD" },
    duration: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    callStart: { type: Date },
    callEnd: { type: Date },
  },
  Plugins.Mongo.Normalize()
);

CallSchema.plugin(Plugins.Mongo.AutoPopulate);

const CallModel = model<ICall>("Call", CallSchema);

export default CallModel;
