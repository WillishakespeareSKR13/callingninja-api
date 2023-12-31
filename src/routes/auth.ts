import Controller from "../controllers";
import { RouteOptions } from "fastify";

export const Login: RouteOptions = {
  method: "POST",
  url: "/api/auth/login",
  handler: Controller.Auth.Login,
  schema: Controller.Auth.Schema.Login,
};
export const Register: RouteOptions = {
  method: "POST",
  url: "/api/auth/register",
  handler: Controller.Auth.Register,
  schema: Controller.Auth.Schema.Register,
};
export const Token: RouteOptions = {
  method: "GET",
  url: "/api/auth/token",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Auth.Token,
  schema: Controller.Auth.Schema.Token,
};

export const RefreshToken: RouteOptions = {
  method: "GET",
  url: "/api/auth/refreshToken",
  onRequest: (f) => f.jwtVerify(),
  handler: Controller.Auth.RefreshToken,
  schema: Controller.Auth.Schema.RefreshToken,
};
