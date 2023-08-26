import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const GetNumbers: RouteOptions = {
  method: "GET",
  url: "/api/twilio/phones/user/:id",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Twilio.GetPhonesByCompanyId,
  schema: Controller.Twilio.Schema.GetPhonesByUserId,
};
