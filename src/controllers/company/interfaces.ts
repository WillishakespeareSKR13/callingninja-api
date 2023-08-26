import { z } from "zod";
import { Company } from "../../models/company";

export const InputCompany = Company.omit({
  id: true,
});

export const InputCompanyId = z.object({
  id: z.string(),
});

export const OutputCompany = Company;
