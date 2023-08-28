import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to call endpoint",
  tags: ["calls"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputCall.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to call endpoint",
  tags: ["calls"],
  summary: "Get By Id Method",
  params: Interfaces.InputCallId,
  response: {
    200: Interfaces.OutputCall,
  },
};

export const GetByCompanyId = {
  description: "This is the method get by company id to call endpoint",
  tags: ["calls"],
  summary: "Get By Company Id Method",
  params: Interfaces.InputCallByCompanyId,
  response: {
    200: Interfaces.OutputCall.array(),
  },
};

export const GetByCampaignId = {
  description: "This is the method get by campaign id to call endpoint",
  tags: ["calls"],
  summary: "Get By Campaign Id Method",
  params: Interfaces.InputCallByCampaignId,
  response: {
    200: Interfaces.OutputCall.array(),
  },
};

export const Update = {
  description: "This is the method update to call endpoint",
  tags: ["calls"],
  summary: "Update Method",
  params: Interfaces.InputCallId,
  body: Interfaces.InputCall.partial(),
  response: {
    200: Interfaces.OutputCall,
  },
};

export const Delete = {
  description: "This is the method delete to call endpoint",
  tags: ["calls"],
  summary: "Delete Method",
  params: Interfaces.InputCallId,
  response: {
    200: Interfaces.OutputCall,
  },
};
