import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";

export const Call = z.object({
  id: z.string(),
  sid: z.string(),
  userId: z.custom<Schema.Types.ObjectId>(),
  companyId: z.custom<Schema.Types.ObjectId>(),
  to: z.string(),
  from: z.string(),
  status: z.string(),
  duration: z.number(),
  price: z.number(),
  priceUnit: z.string(),
  callStart: z.coerce.date(),
  callEnd: z.coerce.date(),
});

export type ICall = z.infer<typeof Call>;

const CallSchema = new Schema<ICall>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    sid: { type: String, required: true },
    to: { type: String, required: true },
    from: { type: String, required: true },
    status: { type: String, required: true },
    duration: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    priceUnit: { type: String, default: "USD" },
    callStart: { type: Date, required: true },
    callEnd: { type: Date, required: true },
  },
  Plugins.Mongo.Normalize()
);

CallSchema.plugin(Plugins.Mongo.AutoPopulate);

const CallModel = model<ICall>("Call", CallSchema);

export default CallModel;
