import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/user",
  handler: Controller.User.Get,
  schema: Controller.User.Schema.Get,
  onRequest: (f) => f.jwtVerify(),
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/user/:id",
  handler: Controller.User.GetById,
  schema: Controller.User.Schema.GetById,
  onRequest: (f) => f.jwtVerify(),
};
export const Create: RouteOptions = {
  method: "POST",
  url: "/api/user",
  handler: Controller.User.Create,
  schema: Controller.User.Schema.Create,
  onRequest: (f) => f.jwtVerify(),
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/user/:id",
  handler: Controller.User.Update,
  schema: Controller.User.Schema.Update,
  onRequest: (f) => f.jwtVerify(),
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/user/:id",
  handler: Controller.User.Delete,
  schema: Controller.User.Schema.Delete,
  onRequest: (f) => f.jwtVerify(),
};
