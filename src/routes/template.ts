import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/template",
  handler: Controller.Template.Get,
  schema: Controller.Template.Schema.Get,
  onRequest: (f) => f.jwtVerify(),
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/template/:id",
  handler: Controller.Template.GetById,
  schema: Controller.Template.Schema.GetById,
  onRequest: (f) => f.jwtVerify(),
};
export const Create: RouteOptions = {
  method: "POST",
  url: "/api/template",
  handler: Controller.Template.Create,
  schema: Controller.Template.Schema.Create,
  onRequest: (f) => f.jwtVerify(),
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/template/:id",
  handler: Controller.Template.Update,
  schema: Controller.Template.Schema.Update,
  onRequest: (f) => f.jwtVerify(),
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/template/:id",
  handler: Controller.Template.Delete,
  schema: Controller.Template.Schema.Delete,
  onRequest: (f) => f.jwtVerify(),
};
