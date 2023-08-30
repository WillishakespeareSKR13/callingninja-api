import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/call",
  handler: Controller.Call.Get,
  schema: Controller.Call.Schema.Get,
  onRequest: (f) => f.jwtVerify(),
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/call/:id",
  handler: Controller.Call.GetById,
  schema: Controller.Call.Schema.GetById,
  onRequest: (f) => f.jwtVerify(),
};
export const GetByCompanyId: RouteOptions = {
  method: "GET",
  url: "/api/call/company/:id",
  handler: Controller.Call.GetByCompanyId,
  schema: Controller.Call.Schema.GetByCompanyId,
  onRequest: (f) => f.jwtVerify(),
};
export const GetByCampaignId: RouteOptions = {
  method: "GET",
  url: "/api/call/campaign/:id",
  handler: Controller.Call.GetByCampaignId,
  schema: Controller.Call.Schema.GetByCampaignId,
  onRequest: (f) => f.jwtVerify(),
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/call/:id",
  handler: Controller.Call.Update,
  schema: Controller.Call.Schema.Update,
  onRequest: (f) => f.jwtVerify(),
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/call/:id",
  handler: Controller.Call.Delete,
  schema: Controller.Call.Schema.Delete,
  onRequest: (f) => f.jwtVerify(),
};
