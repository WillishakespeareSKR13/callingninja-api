import { Phones } from "../../models/phones";
import { Company } from "../../models/company";

export const InputPhones = Phones.omit({
  id: true,
});

export const InputPhonesMultiple = Phones.pick({
  companyId: true,
}).extend({
  phones: Phones.pick({
    phone: true,
    name: true,
  }).array(),
});

export const InputPhonesId = Phones.pick({
  id: true,
});

export const InputPhonesByCompanyId = Company.pick({
  id: true,
});

export const OutputPhones = Phones;
