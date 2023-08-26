import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Get: RouteOptions = {
  method: "GET",
  url: "/api/twilio",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Twilio.Get,
  schema: Controller.Twilio.Schema.Get,
};
