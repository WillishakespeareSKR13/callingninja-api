import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetNumbers: RouteOptions = {
  method: "GET",
  url: "/api/twilio/phones/company/:id",
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

export const CallCallback: RouteOptions = {
  method: "POST",
  url: "/api/twilio/call/callback/:id",
  handler: Controller.Twilio.CallCallback,
  schema: Controller.Twilio.Schema.CallCallback,
};
