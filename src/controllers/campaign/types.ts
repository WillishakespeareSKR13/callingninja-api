import * as Interfaces from "./interfaces";

export type InputCampaignById = {
  Params: typeof Interfaces.InputCampaignId["_type"];
};

export type InputCampaignByCompanyId = {
  Params: typeof Interfaces.InputCampaignCompanyId["_type"];
};

export type InputCreateCampaign = {
  Body: typeof Interfaces.InputCampaign["_type"];
};

export type InputUpdateCampaign = {
  Params: typeof Interfaces.InputCampaignId["_type"];
  Body: Partial<typeof Interfaces.InputCampaign["_type"]>;
};

export type InputDeleteCampaign = {
  Params: typeof Interfaces.InputCampaignId["_type"];
};
