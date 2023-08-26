import Company from "../../models/company";
import { IController } from "../../types/controller";
import * as Types from "./types";
import { Twilio } from "twilio";

export const GetPhonesByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputPhonesByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const { twillioSid, twillioToken } = company;
  const client = new Twilio(twillioSid, twillioToken);
  const numbers = await client.incomingPhoneNumbers.list();

  return numbers;
};

export * as Types from "./types";
export * as Schema from "./schema";
