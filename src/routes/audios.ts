import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/audios",
  handler: Controller.Audios.Get,
  schema: Controller.Audios.Schema.Get,
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/audios/:id",
  handler: Controller.Audios.GetById,
  schema: Controller.Audios.Schema.GetById,
};
export const SignedUrl: RouteOptions = {
  method: "POST",
  url: "/api/audios/signedUrl",
  handler: Controller.Audios.SignedUrl,
  schema: Controller.Audios.Schema.SignedUrl,
};

export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/audios/:id",
  handler: Controller.Audios.Update,
  schema: Controller.Audios.Schema.Update,
};

export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/audios/:id",
  handler: Controller.Audios.Delete,
  schema: Controller.Audios.Schema.Delete,
};
