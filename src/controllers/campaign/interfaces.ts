import { z } from "zod";
import { Campaign } from "../../models/campaign";

export const InputCampaign = Campaign.pick({
  name: true,
  description: true,
  companyId: true,
  userId: true,
});

export const InputCampaignId = z.object({
  id: z.string(),
});

export const InputCampaignCompanyId = z.object({
  id: z.string(),
});

export const OutputCampaign = Campaign;
