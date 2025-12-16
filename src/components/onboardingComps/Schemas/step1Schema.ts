import { z } from "zod";

export const personaSchema = z.object({
  persona: z.string().min(1, "Please Select Anyone Option!"),
});

export type personaFormData = z.infer<typeof personaSchema>;
