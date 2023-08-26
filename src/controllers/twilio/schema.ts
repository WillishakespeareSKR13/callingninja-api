import * as Interfaces from "./interfaces";

export const GetPhonesByUserId = {
  description: "This is the method get to phone by user id endpoint",
  tags: ["twilios"],
  summary: "Get Method",
  params: Interfaces.InputCompanyId,
  response: {
    200: Interfaces.OutputTwilioPhone.array(),
  },
};

export const Call = {
  description: "This is the method call to phone endpoint",
  tags: ["twilios"],
  summary: "Post Method",
  body: Interfaces.InputTwilioPhoneCall,
  response: {
    200: Interfaces.OutputTwilioCall.array(),
  },
};

export const CallCallback = {
  description: "This is the method call to phone endpoint",
  tags: ["twilios"],
  summary: "Post Method",
  body: Interfaces.InputTwilioCallCallback,
  response: {
    200: Interfaces.OutputTwilioCallCallback,
  },
};
