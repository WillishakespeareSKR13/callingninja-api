import { IController } from "../../types/controller";
import * as Types from "./types";
import Campaign from "../../models/campaign";
import Company from "../../models/company";

export const Get: IController = async () => {
  const campaigns = await Campaign.find();
  return campaigns;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputCampaignById["Params"];
  const campaign = await Campaign.findById(id);
  if (!campaign) throw new Error("Campaign not found");

  return campaign;
};

export const GetByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputCampaignByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const campaigns = await Campaign.find({ companyId: id });
  return campaigns;
};

export const Create: IController = async (req) => {
  const body = req.body as Types.InputCreateCampaign["Body"];
  const campaign = await Campaign.create(body);
  return campaign;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateCampaign["Params"];
  const body = req.body as Types.InputUpdateCampaign["Body"];

  const campaign = await Campaign.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!campaign) throw new Error("Campaign not found");

  return campaign;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteCampaign["Params"];

  const campaign = await Campaign.findByIdAndDelete(id);
  if (!campaign) throw new Error("Campaign not found");

  return campaign;
};

export * as Types from "./types";
export * as Schema from "./schema";
