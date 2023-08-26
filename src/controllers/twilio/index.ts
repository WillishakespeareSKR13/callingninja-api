import CONFIG from "../../config";
import Company from "../../models/company";
import Calls from "../../models/calls";
import { IController } from "../../types/controller";
import * as Types from "./types";
import { Twilio } from "twilio";

export const GetPhonesByCompanyId: IController = async (req) => {
  const { id } = req.params as Types.InputPhonesByCompanyId["Params"];

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const { twillioSid, twillioToken } = company;
  const client = new Twilio(twillioSid, twillioToken);
  const numbers = await client.incomingPhoneNumbers.list();

  return numbers;
};

export const Call: IController = async (req) => {
  const { companyId, phones, phone } =
    req.body as Types.InputTwilioPhoneCall["Body"];

  const company = await Company.findById(companyId);
  if (!company) throw new Error("Company not found");

  const { twillioSid, twillioToken } = company;
  const client = new Twilio(twillioSid, twillioToken);

  const Audio = `
    <Response>
      <Play>http://demo.twilio.com/docs/classic.mp3</Play>
    </Response>
  `;
  const callbackUrl = `${CONFIG.APP.HOST_CALLBACK}/api/twilio/call/callback}`;

  const calls = await Promise.all(
    phones.map(async (toPhone) => {
      const twilio_call = await client.calls.create({
        twiml: Audio,
        statusCallback: callbackUrl,
        statusCallbackMethod: "POST",
        statusCallbackEvent: ["initiated", "ringing", "answered", "completed"],
        to: toPhone,
        from: phone,
      });
      console.log(twilio_call);
      // const create_call = await Calls.create({});
      return twilio_call;
    })
  );

  return calls;
};

export const CallCallback: IController = async (req) => {
  const body = req.body as Types.InputTwilioCallCallback["Body"];
  console.log(body);
  return {
    sid: body.sid ?? "",
  };
};

export * as Types from "./types";
export * as Schema from "./schema";
