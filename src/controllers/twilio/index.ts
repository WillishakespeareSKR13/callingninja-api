import { IController } from "../../types/controller";

export const Get: IController = async () => {
  const data = {
    message: "Hello World",
  };
  return data;
};

export * as Types from "./types";
export * as Schema from "./schema";
