import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to phones endpoint",
  tags: ["phones"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputPhones.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to phones endpoint",
  tags: ["phones"],
  summary: "Get By Id Method",
  params: Interfaces.InputPhonesId,
  response: {
    200: Interfaces.OutputPhones,
  },
};

export const GetByCompanyId = {
  description: "This is the method get by company id to phones endpoint",
  tags: ["phones"],
  summary: "Get By Company Id Method",
  params: Interfaces.InputPhonesByCompanyId,
  response: {
    200: Interfaces.OutputPhones.array(),
  },
};

export const Create = {
  description: "This is the method post to phones endpoint",
  tags: ["phones"],
  summary: "Post Method",
  body: Interfaces.InputPhones,
  response: {
    200: Interfaces.OutputPhones,
  },
};

export const CreateMultiple = {
  description: "This is the method post multiple to phones endpoint",
  tags: ["phones"],
  summary: "Post Multiple Method",
  body: Interfaces.InputPhonesMultiple,
  response: {
    200: Interfaces.OutputPhones.array(),
  },
};

export const Update = {
  description: "This is the method update to phones endpoint",
  tags: ["phones"],
  summary: "Update Method",
  params: Interfaces.InputPhonesId,
  body: Interfaces.InputPhones.partial(),
  response: {
    200: Interfaces.OutputPhones,
  },
};

export const Delete = {
  description: "This is the method delete to phones endpoint",
  tags: ["phones"],
  summary: "Delete Method",
  params: Interfaces.InputPhonesId,
  response: {
    200: Interfaces.OutputPhones,
  },
};
