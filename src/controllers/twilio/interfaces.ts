import { z } from "zod";

export const TwilioPhone = z.object({
  accountSid: z.string(),
  addressSid: z.string(),
  addressRequirements: z.string(),
  apiVersion: z.string(),
  beta: z.boolean(),
  capabilities: z.object({
    fax: z.boolean(),
    voice: z.boolean(),
    sms: z.boolean(),
    mms: z.boolean(),
  }),
  dateCreated: z.date(),
  dateUpdated: z.date(),
  friendlyName: z.string(),
  identitySid: z.string().nullable(),
  phoneNumber: z.string(),
  origin: z.string(),
  sid: z.string(),
  smsApplicationSid: z.string(),
  smsFallbackMethod: z.string(),
  smsFallbackUrl: z.string(),
  smsMethod: z.string(),
  smsUrl: z.string(),
  statusCallback: z.string(),
  statusCallbackMethod: z.string(),
  trunkSid: z.string(),
  uri: z.string(),
  voiceReceiveMode: z.string().nullable(),
  voiceApplicationSid: z.string().nullable(),
  voiceCallerIdLookup: z.boolean(),
  voiceFallbackMethod: z.string(),
  voiceFallbackUrl: z.string().nullable(),
  voiceMethod: z.string(),
  voiceUrl: z.string(),
  emergencyStatus: z.string(),
  emergencyAddressSid: z.string().nullable(),
  emergencyAddressStatus: z.string(),
  bundleSid: z.string(),
  status: z.string(),
});

export const InputCompanyId = z.object({
  id: z.string(),
});

export const OutputTwilioPhone = TwilioPhone;
