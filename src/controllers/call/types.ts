import * as Interfaces from "./interfaces";

export type InputCallById = {
  Params: typeof Interfaces.InputCallId["_type"];
};

export type InputCallByCompanyId = {
  Params: typeof Interfaces.InputCallByCompanyId["_type"];
};

export type InputCallByCampaignId = {
  Params: typeof Interfaces.InputCallByCampaignId["_type"];
};

export type InputUpdateCall = {
  Params: typeof Interfaces.InputCallId["_type"];
  Body: Partial<typeof Interfaces.InputCall["_type"]>;
};

export type InputDeleteCall = {
  Params: typeof Interfaces.InputCallId["_type"];
};
