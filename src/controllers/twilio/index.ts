import CONFIG from "../../config";
import Company from "../../models/company";
import Compaign from "../../models/campaign";
import Calls, { ICall } from "../../models/call";
import User from "../../models/user";
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
  const { campaignId, companyId, userId, phones, phone } =
    req.body as Types.InputTwilioPhoneCall["Body"];

  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const company = await Company.findById(companyId);
  if (!company) throw new Error("Company not found");

  const useCampaign = async () => {
    if (!campaignId) return {};
    const campaign = await Compaign.findById(campaignId);
    if (!campaign) throw new Error("Campaign not found");
    return { campaignId: campaign.id };
  };

  const useCallCampaign = async (calls: ICall[]) => {
    if (!campaignId) return;
    const campaign = await Compaign.findByIdAndUpdate(
      campaignId,
      { $push: { calls: { $each: calls.map((call) => call.id) } } },
      { new: true }
    );
    if (!campaign) throw new Error("Campaign not found");
  };

  const { twillioSid, twillioToken } = company;
  const client = new Twilio(twillioSid, twillioToken);

  const Audio = `
    <Response>
      <Play>http://demo.twilio.com/docs/classic.mp3</Play>
    </Response>
  `;

  const callbackUrl = `${CONFIG.APP.HOST_CALLBACK}/api/twilio/call/callback/${companyId}`;

  const callsPromises = phones.map(async (toPhone) => {
    const twilioCall = await client.calls.create({
      twiml: Audio,
      statusCallback: callbackUrl,
      statusCallbackMethod: "POST",
      statusCallbackEvent: ["initiated", "ringing", "answered", "completed"],
      to: toPhone,
      from: phone,
    });
    const campaign = await useCampaign();
    const createCall = await Calls.create({
      sid: twilioCall.sid,
      userId,
      companyId,
      to: twilioCall.to,
      from: twilioCall.from,
      status: twilioCall.status,
      priceUnit: twilioCall.priceUnit,
      ...campaign,
    });

    return createCall;
  });

  const calls = await Promise.all(callsPromises);
  await useCallCampaign(calls);

  return calls;
};

export const CallCallback: IController = async (req) => {
  const body = req.body as Types.InputTwilioCallCallback["Body"];
  const params = req.params as Types.InputTwilioCallCallback["Params"];
  const { id } = params;

  const company = await Company.findById(id);
  if (!company) throw new Error("Company not found");

  const { twillioSid, twillioToken } = company;
  const client = new Twilio(twillioSid, twillioToken);

  const call = await client.calls(body?.CallSid).fetch();

  const updateCall = await Calls.findOneAndUpdate(
    { sid: call.sid },
    {
      toCountry: body.ToCountry,
      toState: body.ToState,
      toCity: body.ToCity,
      fromCountry: body.FromCountry,
      fromState: body.FromState,
      fromCity: body.FromCity,
      status: call.status,
      duration: call.duration,
      price: call.price,
      priceUnit: call.priceUnit,
      callStart: call.startTime,
      callEnd: call.endTime,
    }
  );

  return updateCall;
};

export * as Types from "./types";
export * as Schema from "./schema";
