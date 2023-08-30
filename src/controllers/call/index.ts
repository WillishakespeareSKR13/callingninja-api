import { IController } from "../../types/controller";
import * as Types from "./types";
import Call from "../../models/call";
import Company from "../../models/company";
import User from "../../models/user";
import Campaign from "../../models/campaign";

export const Get: IController = async () => {
  const calls = await Call.find();
  return calls;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputCallById["Params"];

  const call = await Call.findById(id);
  if (!call) throw new Error("Call not found");

  return call;
};

export const GetByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputCallByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const calls = await Call.find({ companyId: company._id });
  const callsWithRelations = await Promise.all(
    calls.map(async (call) => {
      const campaign = await Campaign.findById(call.campaignId);
      const user = await User.findById(call.userId);
      const company = await Company.findById(call.companyId);
      return { ...call.toJSON(), campaign, user, company };
    })
  );

  return callsWithRelations;
};

export const GetByCampaignId: IController = async (req) => {
  const { id } = req.params as Types.InputCallByCampaignId["Params"];

  const campaign = await Campaign.findById(id);
  if (!campaign) throw new Error("Campaign not found");

  const calls = await Call.find({ campaignId: campaign._id });

  return calls;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateCall["Params"];
  const body = req.body as Types.InputUpdateCall["Body"];

  const call = await Call.findByIdAndUpdate(id, body, { new: true });
  if (!call) throw new Error("Call not found");

  return call;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteCall["Params"];

  const call = await Call.findByIdAndDelete(id);
  if (!call) throw new Error("Call not found");

  return call;
};

export * as Types from "./types";
export * as Schema from "./schema";
