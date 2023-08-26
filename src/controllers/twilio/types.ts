import * as Interfaces from "./interfaces";

export type ITwilioPhone = typeof Interfaces.TwilioPhone["shape"];

export type InputPhonesByCompanyId = {
  Params: typeof Interfaces.InputCompanyId["shape"];
};

export type InputTwilioPhoneCall = {
  Body: typeof Interfaces.InputTwilioPhoneCall["_type"];
};
