import CONFIG from "../../config";
import { IController } from "../../types/controller";
import * as Types from "./types";
import { Storage } from "@google-cloud/storage";
import { v4 as uuidv4 } from "uuid";

export const Image: IController = async (req) => {
  const { fileName } = req.body as Types.InputStorage["Body"];

  const googleJson = JSON.parse(CONFIG.GOOGLE.JSON);
  const storage = new Storage({
    projectId: googleJson.project_id,
    credentials: {
      client_email: googleJson.client_email,
      private_key: googleJson.private_key,
    },
  });

  const [_, ext] = fileName.split(".");

  const urlName = `${uuidv4()}.${ext}`;

  const url = `https://storage.googleapis.com/${CONFIG.GOOGLE.BUCKET}/${CONFIG.APP.NAME}/images/${urlName}`;

  const [signedUrl] = await storage
    .bucket(CONFIG.GOOGLE.BUCKET)
    .file(`${CONFIG.APP.NAME}/images/${urlName}`)
    .getSignedUrl({
      action: "write",
      expires: Date.now() + 1000 * 60 * 60 * 24 * 365 * 10,
    });

  return {
    url,
    signedUrl,
  };
};

export * as Types from "./types";
export * as Schema from "./schema";
