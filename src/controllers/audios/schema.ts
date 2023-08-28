import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to audios endpoint",
  tags: ["audios"],
  summary: "Get Method",
  Querystring: Interfaces.InputAudiosGet,
  response: {
    200: Interfaces.OutputAudios.array(),
  },
};

export const GetById = {
  description: "This is the method get by id to audios endpoint",
  tags: ["audios"],
  summary: "Get By Id Method",
  params: Interfaces.InputAudiosId,
  response: {
    200: Interfaces.OutputAudios,
  },
};

export const SignedUrl = {
  description: "This is the method post to audios endpoint",
  tags: ["audios"],
  summary: "Post Method",
  body: Interfaces.InputAudiosSignedUrl,
  response: {
    200: Interfaces.OutputAudios,
  },
};

export const Update = {
  description: "This is the method put to audios endpoint",
  tags: ["audios"],
  summary: "Put Method",
  params: Interfaces.InputAudiosId,
  body: Interfaces.InputUpdateAudios.partial(),
  response: {
    200: Interfaces.OutputAudios,
  },
};

export const Delete = {
  description: "This is the method delete to audios endpoint",
  tags: ["audios"],
  summary: "Delete Method",
  params: Interfaces.InputAudiosId,
  response: {
    200: Interfaces.OutputAudios,
  },
};
