import User from "../../models/user";
import Company from "../../models/company";
import { IController } from "../../types/controller";
import * as Types from "./types";

export const Get: IController = async () => {
  const companies = await Company.find();
  return companies;
};

export const GetByUserId: IController = async (req) => {
  const { id } = req.params as Types.InputCompanyByUserId["Params"];

  const user = await User.findById(id);
  if (!user) throw new Error("User not found");

  const companies = await Company.find({ userId: user.id });

  return companies;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputCompanyById["Params"];
  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  return company;
};

export const Create: IController = async (req) => {
  const payload = req.body as Types.InputCreateCompany["Body"];
  const { userId } = payload;

  const find_user = User.findById(userId);
  if (!find_user) throw new Error("User not found");

  const company = await Company.create(payload);

  await User.findByIdAndUpdate(userId, { $push: { companies: company.id } });

  return company;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateCompany["Params"];
  const body = req.body as Types.InputUpdateCompany["Body"];

  const company = await Company.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!company) throw new Error("Company not found");

  return company;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteCompany["Params"];

  const company = await Company.findByIdAndDelete(id);
  if (!company) throw new Error("Company not found");

  await User.findByIdAndUpdate(company.userId, {
    $pull: { companies: company.id },
  });

  return company;
};

export * as Types from "./types";
export * as Schema from "./schema";
