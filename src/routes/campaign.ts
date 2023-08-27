import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/campaign",
  handler: Controller.Campaign.Get,
  schema: Controller.Campaign.Schema.Get,
};
export const GetById: RouteOptions = {
  method: "GET",
  url: "/api/campaign/:id",
  handler: Controller.Campaign.GetById,
  schema: Controller.Campaign.Schema.GetById,
};
export const Create: RouteOptions = {
  method: "POST",
  url: "/api/campaign",
  handler: Controller.Campaign.Create,
  schema: Controller.Campaign.Schema.Create,
};
export const Update: RouteOptions = {
  method: "PUT",
  url: "/api/campaign/:id",
  handler: Controller.Campaign.Update,
  schema: Controller.Campaign.Schema.Update,
};
export const Delete: RouteOptions = {
  method: "DELETE",
  url: "/api/campaign/:id",
  handler: Controller.Campaign.Delete,
  schema: Controller.Campaign.Schema.Delete,
};
