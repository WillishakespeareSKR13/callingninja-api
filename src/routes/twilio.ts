import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetNumbers: RouteOptions = {
  method: "GET",
  url: "/api/twilio/phones/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Twilio.GetPhonesByCompanyId,
  schema: Controller.Twilio.Schema.GetPhonesByUserId,
};

export const Call: RouteOptions = {
  method: "POST",
  url: "/api/twilio/call",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Twilio.Call,
  schema: Controller.Twilio.Schema.Call,
};
