import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/call",
  handler: Controller.Call.Get,
  schema: Controller.Call.Schema.Get,
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/call/:id",
  handler: Controller.Call.GetById,
  schema: Controller.Call.Schema.GetById,
};
export const GetByCompanyId: RouteOptions = {
  method: "GET",
  url: "/api/call/company/:id",
  handler: Controller.Call.GetByCompanyId,
  schema: Controller.Call.Schema.GetByCompanyId,
};
export const GetByCampaignId: RouteOptions = {
  method: "GET",
  url: "/api/call/campaign/:id",
  handler: Controller.Call.GetByCampaignId,
  schema: Controller.Call.Schema.GetByCampaignId,
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/call/:id",
  handler: Controller.Call.Update,
  schema: Controller.Call.Schema.Update,
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/call/:id",
  handler: Controller.Call.Delete,
  schema: Controller.Call.Schema.Delete,
};
