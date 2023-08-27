import * as Interfaces from "./interfaces";

export type ITwilioPhone = typeof Interfaces.TwilioPhone["_type"];

export type InputPhonesByCompanyId = {
  Params: typeof Interfaces.InputCompanyId["_type"];
};

export type InputTwilioPhoneCall = {
  Body: typeof Interfaces.InputTwilioPhoneCall["_type"];
};

export type InputTwilioCallCallback = {
  Body: typeof Interfaces.InputTwilioCallCallback["_type"];
  Params: typeof Interfaces.InputCompanyId["_type"];
};
