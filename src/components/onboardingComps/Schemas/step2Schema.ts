import { z } from "zod";

export const businessSchema = z.object({
  businessName: z.string().min(1, "Please Enter Valid Name!"),
  role: z.string().min(1, "Please Select Your Role!"),
  size: z.string().min(1, "Please Select Company Size!"),
  industry: z.string().min(1, "Please Select Your Industry!"),
});

export type businessFormData = z.infer<typeof businessSchema>;
