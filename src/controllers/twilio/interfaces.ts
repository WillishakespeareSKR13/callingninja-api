import { z } from "zod";

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

const TwilioCall = z.object({
  callerName: z.string().nullish(),
  dateCreated: z.date().nullish(),
  dateUpdated: z.date().nullish(),
  direction: z.string().nullish(),
  duration: z.string().nullish(),
  endTime: z.date().nullish(),
  forwardedFrom: z.string().nullish(),
  from: z.string().nullish(),
  fromFormatted: z.string().nullish(),
  groupSid: z.string().nullish(),
  price: z.string().nullish(),
  priceUnit: z.string().nullish(),
  sid: z.string().nullish(),
  startTime: z.date().nullish(),
  status: z.string().nullish(),
  to: z.string().nullish(),
  toFormatted: z.string().nullish(),
});

export const InputCompanyId = z.object({
  id: z.string(),
});

export const InputTwilioPhoneCall = z.object({
  companyId: z.string(),
  phone: z.string(),
  phones: z.array(z.string()),
});

export const OutputTwilioPhone = TwilioPhone;

export const OutputTwilioCall = TwilioCall;
