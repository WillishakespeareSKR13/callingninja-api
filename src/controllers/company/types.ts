import * as Interfaces from "./interfaces";

export type InputCompanyById = {
  Params: typeof Interfaces.InputCompanyId["shape"];
};

export type InputCreateCompany = {
  Body: typeof Interfaces.InputCompany["shape"];
};

export type InputUpdateCompany = {
  Params: typeof Interfaces.InputCompanyId["shape"];
  Body: Partial<typeof Interfaces.InputCompany["shape"]>;
};

export type InputDeleteCompany = {
  Params: typeof Interfaces.InputCompanyId["shape"];
};
