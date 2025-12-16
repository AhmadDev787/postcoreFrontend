import { z } from "zod";

export const contentSchema = z.object({
  brandVoice: z.string().min(1, "Please Select Brand Voice!"),
  audience: z
    .array(z.string().min(1))
    .min(1, "Please Select At Least 1 Audience!"),
  goals: z.array(z.string().min(1)).min(1, "Please Select At Least One Goal!"),
});

export type contentFormData = z.infer<typeof contentSchema>;
