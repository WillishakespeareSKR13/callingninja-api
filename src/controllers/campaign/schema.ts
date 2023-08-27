import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to campaign endpoint",
  tags: ["campaigns"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputCampaign.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to campaign endpoint",
  tags: ["campaigns"],
  summary: "Get By Id Method",
  params: Interfaces.InputCampaignId,
  response: {
    200: Interfaces.OutputCampaign,
  },
};

export const Create = {
  description: "This is the method post to campaign endpoint",
  tags: ["campaigns"],
  summary: "Post Method",
  body: Interfaces.InputCampaign,
  response: {
    200: Interfaces.OutputCampaign,
  },
};

export const Update = {
  description: "This is the method update to campaign endpoint",
  tags: ["campaigns"],
  summary: "Update Method",
  params: Interfaces.InputCampaignId,
  body: Interfaces.InputCampaign.partial(),
  response: {
    200: Interfaces.OutputCampaign,
  },
};

export const Delete = {
  description: "This is the method delete to campaign endpoint",
  tags: ["campaigns"],
  summary: "Delete Method",
  params: Interfaces.InputCampaignId,
  response: {
    200: Interfaces.OutputCampaign,
  },
};
