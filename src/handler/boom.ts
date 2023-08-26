import * as boom from "@hapi/boom";
import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import CONFIG from "../config";

type IHandler = (
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) => void;

type IZodError = {
  path: string[];
  message: string;
};

export const ErrorHandler: IHandler = (error, _, reply) => {
  const { output, message, name, details } = boom.boomify(error) as any;
  const { statusCode } = output;
  const parse = () => {
    switch (name) {
      case "ZodError":
        const arrayError = JSON.parse(message ?? "[]") as IZodError[];
        const errors = arrayError.map((error) => ({
          key: error.path.join(","),
          message: error.message,
        }));
        return errors;
      default:
        return message ?? ["Error interno del servidor"];
    }
  };

  const getDetails = () => {
    if (CONFIG.APP.ENV !== "development") return {};
    return { details };
  };

  reply.code(statusCode).send({
    statusCode,
    error: name,
    message: parse(),
    ...getDetails(),
  });
};
