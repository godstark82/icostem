import { z } from "zod";



export const RegistrationSchema = z.object({
    fullName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    affiliation: z.string().min(1),
    country: z.string().min(1),
    category: z.string().min(1),
    daysAttending: z.string().min(1),
    presentingPaper: z.boolean(),
    paymentIntentId: z.string().min(1),
});