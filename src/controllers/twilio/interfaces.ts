import { z } from "zod";

export const TwilioPhone = z.object({
  accountSid: z.string().nullish(),
  addressSid: z.string().nullish(),
  addressRequirements: z.string().nullish(),
  apiVersion: z.string().nullish(),
  beta: z.boolean().nullish(),
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
  identitySid: z.string().nullish(),
  phoneNumber: z.string().nullish(),
  origin: z.string().nullish(),
  sid: z.string().nullish(),
  smsApplicationSid: z.string().nullish(),
  smsFallbackMethod: z.string().nullish(),
  smsFallbackUrl: z.string().nullish(),
  smsMethod: z.string().nullish(),
  smsUrl: z.string().nullish(),
  statusCallback: z.string().nullish(),
  statusCallbackMethod: z.string().nullish(),
  trunkSid: z.string().nullish(),
  uri: z.string().nullish(),
  voiceReceiveMode: z.string().nullish(),
  voiceApplicationSid: z.string().nullish(),
  voiceCallerIdLookup: z.boolean().nullish(),
  voiceFallbackMethod: z.string().nullish(),
  voiceFallbackUrl: z.string().nullish(),
  voiceMethod: z.string().nullish(),
  voiceUrl: z.string().nullish(),
  emergencyStatus: z.string().nullish(),
  emergencyAddressSid: z.string().nullish(),
  emergencyAddressStatus: z.string().nullish(),
  bundleSid: z.string().nullish(),
  status: z.string().nullish(),
});

const TwilioCall = z.object({
  accountSid: z.string().nullish(),
  answeredBy: z.string().nullish(),
  apiVersion: z.string().nullish(),
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
  parentCallSid: z.string().nullish(),
  phoneNumberSid: z.string().nullish(),
  price: z.string().nullish(),
  priceUnit: z.string().nullish(),
  sid: z.string().nullish(),
  startTime: z.date().nullish(),
  status: z.string().nullish(),
  subresourceUris: z
    .object({
      notifications: z.string().nullish(),
      recordings: z.string().nullish(),
      feedback: z.string().nullish(),
      feedbackSummaries: z.string().nullish(),
      payments: z.string().nullish(),
      events: z.string().nullish(),
      siprec: z.string().nullish(),
      streams: z.string().nullish(),
      userDefinedMessageSubscriptions: z.string().nullish(),
      userDefinedMessages: z.string().nullish(),
    })
    .nullish(),
  to: z.string().nullish(),
  toFormatted: z.string().nullish(),
  trunkSid: z.string().nullish(),
  uri: z.string().nullish(),
  queueTime: z.string().nullish(),
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
