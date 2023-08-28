import * as Interfaces from "./interfaces";

export type InputAudiosById = {
  Params: typeof Interfaces.InputAudiosId["_type"];
};

export type InputAudiosGet = {
  Querystring: typeof Interfaces.InputAudiosGet["_type"];
};

export type InputAudiosSignedUrl = {
  Body: typeof Interfaces.InputAudiosSignedUrl["_type"];
};

export type InputUpdateAudios = {
  Params: typeof Interfaces.InputAudiosId["_type"];
  Body: Partial<typeof Interfaces.InputUpdateAudios["_type"]>;
};

export type InputDeleteAudios = {
  Params: typeof Interfaces.InputAudiosId["_type"];
};
