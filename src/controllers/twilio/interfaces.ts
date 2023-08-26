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

export const InputCompanyId = z.object({
  id: z.string(),
});

export const InputTwilioPhoneCall = z.object({
  companyId: z.string(),
  sid: z.string(),
  phones: z.array(z.string()),
});

export const OutputTwilioPhone = TwilioPhone;
