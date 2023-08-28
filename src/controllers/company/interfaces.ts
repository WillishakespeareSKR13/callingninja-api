import { z } from "zod";
import { Company } from "../../models/company";

export const InputCompany = Company.omit({
  id: true,
});

export const InputCompanyUserId = z.object({
  id: z.string(),
});

export const InputCompanyId = z.object({
  id: z.string(),
});

export const InputEmployee = z.object({
  companyId: z.string(),
  employeeId: z.string(),
});

export const OutputCompany = Company;
