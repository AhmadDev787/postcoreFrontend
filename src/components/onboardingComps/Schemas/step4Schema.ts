import { z } from "zod";

export const lastSchema = z.object({
  preferredFormats: z
    .array(z.string().min(1))
    .min(1, "Please Select At Least One Format"),
  offerings: z
    .array(z.string().min(1))
    .min(1, "Please Enter At Least One Of Your Offerings!"),
  uniqueValue: z.string().optional(),
});

export type lastContentType = z.infer<typeof lastSchema>;
