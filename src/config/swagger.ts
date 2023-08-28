import { SwaggerOptions as ISwaggerOptions } from "@fastify/swagger";
import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";
import { ICONFIG } from ".";
import Plugins from "../plugins";

export const OPTIONS = (CONFIG: ICONFIG): ISwaggerOptions => ({
  swagger: {
    info: {
      title: "Calling Ninja Node API",
      description: "API Documentation for Calling Ninja Node API",
      version: "0.1.0",
    },
    securityDefinitions: {
      Authorization: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    host: CONFIG.GET.HOST_SWAGGER(),
    security: [{ Authorization: [] }],
    schemes: CONFIG.GET.SCHEMES(),
    consumes: ["application/json"],
    produces: ["application/json"],
  },
  hideUntagged: true,
  transform: Plugins.Zod.JsonSchemaTransform,
});

export const UIOPTIONS: FastifySwaggerUiOptions = {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "list",
    deepLinking: true,
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
};
