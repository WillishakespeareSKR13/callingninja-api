import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to company endpoint",
  tags: ["companys"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputCompany.array(),
  },
};

export const GetByUserId = {
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

export const GetByIdEmployees = {
  description: "This is the method get by id to company endpoint",
  tags: ["companys"],
  summary: "Get By Id Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputCompanyEmployees,
  },
};

export const GetByEmployeeId = {
  description: "This is the method get by employee id to company endpoint",
  tags: ["companys"],
  summary: "Get By Employee Id Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputCompany.array(),
  },
};

export const AddEmployee = {
  description: "This is the method add employee to company endpoint",
  tags: ["companys"],
  summary: "Add Employee Method",
  body: Interfaces.InputEmployee,
  response: {
    200: Interfaces.OutputCompany,
  },
};

export const AddEmployeeByEmail = {
  description: "This is the method add employee by email to company endpoint",
  tags: ["companys"],
  summary: "Add Employee By Email Method",
  body: Interfaces.InputEmployeeByEmail,
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
