import { z } from "zod";

const PaperUploadSchema = z.object({
    paperTitle: z.string().min(1),
    paperAbstract: z.string().min(1),
    uploadedFile: z.instanceof(File),
    authorName: z.string().min(1),
    authorEmail: z.string().email(),
    authorAffiliation: z.string().min(1),
    authorCountry: z.string().min(1),
});


export default PaperUploadSchema;