import { Call } from "../../models/call";

export const InputCall = Call.omit({
  id: true,
});

export const InputCallId = Call.pick({
  id: true,
});

export const InputCallByCompanyId = Call.pick({
  id: true,
});

export const InputCallByCampaignId = Call.pick({
  id: true,
});

export const OutputCall = Call;
