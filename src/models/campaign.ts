import { Schema, model } from "mongoose";
import { z } from "zod";
import Plugins from "../plugins";
import { Call } from "./call";

export const Campaign = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  userId: z.custom<Schema.Types.ObjectId>(),
  companyId: z.custom<Schema.Types.ObjectId>(),
  calls: Call.array(),
});

export type ICampaign = z.infer<typeof Campaign>;

const CampaignSchema = new Schema<ICampaign>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    calls: [
      {
        type: Schema.Types.ObjectId,
        ref: "Call",
        default: [],
        autopopulate: true,
      },
    ],
  },
  Plugins.Mongo.Normalize()
);

CampaignSchema.plugin(Plugins.Mongo.AutoPopulate);

const CampaignModel = model<ICampaign>("Campaign", CampaignSchema);

export default CampaignModel;
