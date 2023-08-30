import * as Types from "./types";
import { IController } from "../../types/controller";
import { Storage } from "@google-cloud/storage";
import Audio from "../../models/audios";
import Company from "../../models/company";
import CONFIG from "../../config";

export const Get: IController = async (req) => {
  const query = req.query as Types.InputAudiosGet["Querystring"];

  const getStatus = query?.status ? { status: query.status } : {};

  const audios = await Audio.find(getStatus);

  return audios;
};

export const GetById: IController = async (req) => {
  const { id } = req.params as Types.InputAudiosById["Params"];

  const audio = await Audio.findById(id);
  if (!audio) throw new Error("Audio not found");

  return audio;
};

export const GetByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputAudiosByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const audios = await Audio.find({ companyId: company._id });

  return audios;
};

export const SignedUrl: IController = async (req) => {
  const { fileName, companyId } =
    req.body as Types.InputAudiosSignedUrl["Body"];

  const company = await Company.findById(companyId);
  if (!company) throw new Error("Company not found");

  const googleJson = JSON.parse(CONFIG.GOOGLE.JSON);
  const storage = new Storage({
    projectId: googleJson.project_id,
    credentials: {
      client_email: googleJson.client_email,
      private_key: googleJson.private_key,
    },
  });

  const [name, ext] = fileName.split(".");
  const audioCreate = await Audio.create({
    name,
    fileName,
    ext,
    companyId,
  });

  const urlName = `${audioCreate.id}.${ext}`;

  const url = `https://storage.googleapis.com/${CONFIG.GOOGLE.BUCKET}/${CONFIG.APP.NAME}/${companyId}/${urlName}`;

  const [signedUrl] = await storage
    .bucket(CONFIG.GOOGLE.BUCKET)
    .file(`${CONFIG.APP.NAME}/audios/${urlName}`)
    .getSignedUrl({
      version: "v4",
      action: "write",
      expires: Date.now() + 15 * 60 * 1000,
      contentType: "application/octet-stream",
    });

  const audio = await Audio.findByIdAndUpdate(
    audioCreate.id,
    {
      url,
      signedUrl,
    },
    { new: true }
  );

  return audio;
};

export const Update: IController = async (req) => {
  const { id } = req.params as Types.InputUpdateAudios["Params"];
  const { status } = req.body as Types.InputUpdateAudios["Body"];

  const audio = await Audio.findByIdAndUpdate(
    id,
    {
      status,
    },
    { new: true }
  );
  if (!audio) throw new Error("Audio not found");

  return audio;
};

export const Delete: IController = async (req) => {
  const { id } = req.params as Types.InputAudiosById["Params"];

  const audio = await Audio.findByIdAndDelete(id);
  if (!audio) throw new Error("Audio not found");

  return audio;
};

export * as Types from "./types";
export * as Schema from "./schema";
