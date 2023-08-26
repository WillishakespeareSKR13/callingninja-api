import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetTest: RouteOptions = {
  method: "GET",
  url: "/api/company",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Get,
  schema: Controller.Company.Schema.Get,
};
export const GetCompanyById: RouteOptions = {
  method: "GET",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.GetById,
  schema: Controller.Company.Schema.GetById,
};
export const CreateCompany: RouteOptions = {
  method: "POST",
  url: "/api/company",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Create,
  schema: Controller.Company.Schema.Create,
};
export const UpdateCompany: RouteOptions = {
  method: "PUT",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Update,
  schema: Controller.Company.Schema.Update,
};
export const DeleteCompany: RouteOptions = {
  method: "DELETE",
  url: "/api/company/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.Delete,
  schema: Controller.Company.Schema.Delete,
};
