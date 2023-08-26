import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to company endpoint",
  tags: ["companys"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputCompany.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to company endpoint",
  tags: ["companys"],
  summary: "Get By Id Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputCompany,
  },
};

export const Create = {
  description: "This is the method post to company endpoint",
  tags: ["companys"],
  summary: "Post Method",
  body: Interfaces.InputCompany,
  response: {
    200: Interfaces.OutputCompany,
  },
};

export const Update = {
  description: "This is the method update to company endpoint",
  tags: ["companys"],
  summary: "Update Method",
  params: Interfaces.InputCompanyId,
  body: Interfaces.InputCompany.partial(),
  response: {
    200: Interfaces.OutputCompany,
  },
};

export const Delete = {
  description: "This is the method delete to company endpoint",
  tags: ["companys"],
  summary: "Delete Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputCompany,
  },
};
