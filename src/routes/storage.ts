import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Image: RouteOptions = {
  method: "POST",
  url: "/api/storage/image",
  handler: Controller.Storage.Image,
  schema: Controller.Storage.Schema.Image,
};
