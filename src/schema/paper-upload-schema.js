import { z } from "zod";

const PaperUploadSchema = z.object({
    paperTitle: z.string().min(1),
    paperAbstract: z.string().min(1),
    paperKeywords: z.string().min(1),
    paperDocumentType: z.string().min(1),
    paperTopic: z.string().min(1),
    authors: z.array(z.object({
        name: z.string().min(1),
        affiliation: z.string().min(1),
        email: z.string().email(),
        isCorresponding: z.boolean(),
    })),
    uploadedFile: z.instanceof(File),
    uploaderName: z.string().min(1),
    uploaderEmail: z.string().email(),
    uploaderAffiliation: z.string().min(1),
    uploaderCountry: z.string().min(1),
    
});


export default PaperUploadSchema;