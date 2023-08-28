import * as Interfaces from "./interfaces";

export type InputCompanyByUserId = {
  Params: typeof Interfaces.InputCompanyUserId["_type"];
};

export type InputCompanyById = {
  Params: typeof Interfaces.InputCompanyId["_type"];
};

export type InputCreateCompany = {
  Body: typeof Interfaces.InputCompany["_type"];
};

export type InputUpdateCompany = {
  Params: typeof Interfaces.InputCompanyId["_type"];
  Body: Partial<typeof Interfaces.InputCompany["_type"]>;
};

export type InputAddEmployee = {
  Body: typeof Interfaces.InputEmployee["_type"];
};

export type InputDeleteCompany = {
  Params: typeof Interfaces.InputCompanyId["_type"];
};
