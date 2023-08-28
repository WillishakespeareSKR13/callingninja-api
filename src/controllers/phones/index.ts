import { IController } from "../../types/controller";
import * as Types from "./types";
import Phones from "../../models/phones";
import Company from "../../models/company";

export const Get: IController = async () => {
  const phones = await Phones.find();
  return phones;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputPhonesById["Params"];

  const phone = await Phones.findById(id);
  if (!phone) throw new Error("Phone not found");

  return phone;
};

export const GetByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputPhonesByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const phones = await Phones.find({ companyId: company._id });

  return phones;
};

export const Create: IController = async (req) => {
  const body = req.body as Types.InputCreatePhones["Body"];

  const company = await Company.findById(body.companyId);
  if (!company) throw new Error("Company not found");

  const phoneExists = await Phones.findOne({ phone: body.phone });
  if (phoneExists) throw new Error("Phone already exists");

  const phone = await Phones.create(body);

  return phone;
};

export const CreateMultiple: IController = async (req) => {
  const body = req.body as Types.InputCreateMultiplePhones["Body"];

  const company = await Company.findById(body.companyId);
  if (!company) throw new Error("Company not found");

  const phonesArray = body.phones.map((phone) => phone.phone);
  const phonesExists = await Phones.find({
    phone: { $in: phonesArray },
    companyId: body.companyId,
  });

  const phonesFiltered = body.phones
    .filter((phone) => !phonesExists.some((p) => p.phone === phone.phone))
    .map((phone) => ({ ...phone, companyId: body.companyId }));

  const phones = await Phones.insertMany(phonesFiltered);

  return phones;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdatePhones["Params"];
  const body = req.body as Types.InputUpdatePhones["Body"];

  const phone = await Phones.findByIdAndUpdate(id, body, {
    new: true,
  });
  if (!phone) throw new Error("Phone not found");

  return phone;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputDeletePhones["Params"];

  const phone = await Phones.findByIdAndDelete(id);
  if (!phone) throw new Error("Phone not found");

  return phone;
};

export * as Types from "./types";
export * as Schema from "./schema";
