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

export const GetByIdEmployees: RouteOptions = {
  method: "GET",
  url: "/api/company/:id/employees",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.GetByIdEmployees,
  schema: Controller.Company.Schema.GetByIdEmployees,
};

export const GetByEmployeeId: RouteOptions = {
  method: "GET",
  url: "/api/company/employee/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.GetByEmployeeId,
  schema: Controller.Company.Schema.GetByEmployeeId,
};

export const AddEmployee: RouteOptions = {
  method: "POST",
  url: "/api/company/employee",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.AddEmployee,
  schema: Controller.Company.Schema.AddEmployee,
};

export const AddEmployeeByEmail: RouteOptions = {
  method: "POST",
  url: "/api/company/employee/email",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Company.AddEmployeeByEmail,
  schema: Controller.Company.Schema.AddEmployeeByEmail,
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
