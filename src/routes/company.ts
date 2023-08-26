import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/company",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Get,
  schema: Controller.Company.Schema.Get,
};

export const GetByUserId: RouteOptions = {
  method: "GET",
  url: "/api/company/user/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.GetByUserId,
  schema: Controller.Company.Schema.GetByUserId,
};

export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.GetById,
  schema: Controller.Company.Schema.GetById,
};

export const Create: RouteOptions = {
  method: "POST",
  url: "/api/company",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Create,
  schema: Controller.Company.Schema.Create,
};

export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Update,
  schema: Controller.Company.Schema.Update,
};

export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Delete,
  schema: Controller.Company.Schema.Delete,
};
