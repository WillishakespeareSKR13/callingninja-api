import * as Interfaces from "./interfaces";

export type InputPhonesById = {
  Params: typeof Interfaces.InputPhonesId["_type"];
};

export type InputPhonesByCompanyId = {
  Params: typeof Interfaces.InputPhonesByCompanyId["_type"];
};

export type InputCreatePhones = {
  Body: typeof Interfaces.InputPhones["_type"];
};

export type InputCreateMultiplePhones = {
  Body: typeof Interfaces.InputPhonesMultiple["_type"];
};

export type InputUpdatePhones = {
  Params: typeof Interfaces.InputPhonesId["_type"];
  Body: Partial<typeof Interfaces.InputPhones["_type"]>;
};

export type InputDeletePhones = {
  Params: typeof Interfaces.InputPhonesId["_type"];
};
