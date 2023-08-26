import * as Interfaces from "./interfaces";

export const GetPhonesByUserId = {
  description: "This is the method get to phone by user id endpoint",
  tags: ["twilios"],
  summary: "Get Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputTwilioPhone,
  },
};
