import * as Interfaces from "./interfaces";

export const Get = {
  description: "This is the method get to twilio endpoint",
  tags: ["twilios"],
  summary: "Get Method",
  response: {
    200: Interfaces.OutputTwilio,
  },
};
