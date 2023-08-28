import * as Interfaces from "./interfaces";

export const Login = {
  description: "This is the method get to auth endpoint",
  tags: ["auths"],
  summary: "Login Method",
  body: Interfaces.InputAuthLogin,
  response: {
    200: Interfaces.OutputAuth,
  },
};

export const Register = {
  description: "This is the method get by id to auth endpoint",
  tags: ["auths"],
  summary: "Get By Id Method",
  body: Interfaces.InputAuthRegister,
  response: {
    200: Interfaces.OutputAuth,
  },
};

export const Token = {
  description: "This is the method get to auth endpoint",
  tags: ["auths"],
  summary: "Get Method",
  Headers: Interfaces.InputAuthToken,
  response: {
    200: Interfaces.OutputAuthToken,
  },
};

export const RefreshToken = {
  description: "This is the method get to auth endpoint",
  tags: ["auths"],
  summary: "Get Method",
  Headers: Interfaces.InputAuthToken,
  response: {
    200: Interfaces.OutputAuthRefreshToken,
  },
};
