import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/phones",
  handler: Controller.Phones.Get,
  schema: Controller.Phones.Schema.Get,
  onRequest: (f) => f.jwtVerify(),
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/phones/:id",
  handler: Controller.Phones.GetById,
  schema: Controller.Phones.Schema.GetById,
  onRequest: (f) => f.jwtVerify(),
};
export const GetByCompanyId: RouteOptions = {
  method: "GET",
  url: "/api/phones/company/:id",
  handler: Controller.Phones.GetByCompanyId,
  schema: Controller.Phones.Schema.GetByCompanyId,
  onRequest: (f) => f.jwtVerify(),
};
export const Create: RouteOptions = {
  method: "POST",
  url: "/api/phones",
  handler: Controller.Phones.Create,
  schema: Controller.Phones.Schema.Create,
  onRequest: (f) => f.jwtVerify(),
};
export const CreateMultiple: RouteOptions = {
  method: "POST",
  url: "/api/phones/multiple",
  handler: Controller.Phones.CreateMultiple,
  schema: Controller.Phones.Schema.CreateMultiple,
  onRequest: (f) => f.jwtVerify(),
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/phones/:id",
  handler: Controller.Phones.Update,
  schema: Controller.Phones.Schema.Update,
  onRequest: (f) => f.jwtVerify(),
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/phones/:id",
  handler: Controller.Phones.Delete,
  schema: Controller.Phones.Schema.Delete,
  onRequest: (f) => f.jwtVerify(),
};
