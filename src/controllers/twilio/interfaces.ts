import { z } from "zod";
import { Call } from "../../models/call";

export const TwilioPhone = z.object({
  accountSid: z.string().nullish(),
  addressSid: z.string().nullish(),
  capabilities: z
    .object({
      fax: z.boolean().nullish(),
      voice: z.boolean().nullish(),
      sms: z.boolean().nullish(),
      mms: z.boolean().nullish(),
    })
    .nullish(),
  dateCreated: z.coerce.date().nullish(),
  dateUpdated: z.coerce.date().nullish(),
  friendlyName: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  origin: z.string().nullish(),
  sid: z.string().nullish(),
  status: z.string().nullish(),
});

export const InputCompanyId = z.object({
  id: z.string(),
});

export const InputTwilioPhoneCall = z.object({
  campaignId: z.string().nullish(),
  userId: z.string(),
  audioId: z.string(),
  companyId: z.string(),
  fromPhone: z.string(),
  phones: z.array(z.string()),
});

export const InputTwilioCallCallback = z
  .object({
    ToState: z.string(),
    ToCountry: z.string(),
    ToCity: z.string(),
    FromState: z.string(),
    FromCountry: z.string(),
    FromCity: z.string(),
    CallSid: z.string(),
  })
  .passthrough();

export const OutputTwilioPhone = TwilioPhone;

export const OutputTwilioCall = Call;

export const OutputTwilioCallCallback = z.object({
  sid: z.string(),
});
