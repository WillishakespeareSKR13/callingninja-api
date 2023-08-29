import * as Interfaces from "./interfaces";

export const Image = {
  description: "This is a description",
  tags: ["templates"],
  summary: "Post Method",
  body: Interfaces.InputStorage,
  response: {
    200: Interfaces.OutputStorage,
  },
};
