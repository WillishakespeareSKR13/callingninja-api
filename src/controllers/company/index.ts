import User from "../../models/user";
import Company from "../../models/company";
import { IController } from "../../types/controller";
import * as Types from "./types";

export const Get: IController = async () => {
  const message = {
    message: "Hello World",
    messagePrivate: "Hello World",
  };
  const data = Array.from({ length: 10 }, () => message);
  return data;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputCompanyById["Params"];
  const data = {
    message: `Hello World ${id}`,
    messagePrivate: `Hello World ${id}`,
  };
  return data;
};

export const Create: IController = async (req) => {
  const payload = req.body as Types.InputCreateCompany["Body"];
  const { id_user } = payload;

  const find_user = User.findById(id_user);
  if (!find_user) throw new Error("User not found");

  const new_company = await Company.create(payload);
  const company = new_company.toJSON();

  await User.findByIdAndUpdate(id_user, { $push: { companies: company.id } });

  return company;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateCompany["Params"];
  const body = req.body as Types.InputUpdateCompany["Body"];

  const update_company = await Company.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!update_company) throw new Error("Company not found");

  const company = update_company.toJSON();

  return company;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeleteCompany["Params"];

  const delete_company = await Company.findByIdAndDelete(id);
  if (!delete_company) throw new Error("Company not found");

  const company = delete_company.toJSON();
  await User.findByIdAndUpdate(company.id_user, {
    $pull: { companies: company.id },
  });

  return company;
};

export * as Types from "./types";
export * as Schema from "./schema";
