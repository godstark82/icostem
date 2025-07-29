// pages/api/paper-upload.js
import { NextResponse } from 'next/server';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import PaperUploadSchema from '../../../schema/paper-upload-schema';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('uploadedFile');

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Validate form data against schema
        const validatedData = PaperUploadSchema.parse({
            paperTitle: formData.get('paperTitle'),
            paperAbstract: formData.get('paperAbstract'),
            uploadedFile: file,
            authorName: formData.get('authorName'),
            authorEmail: formData.get('authorEmail'),
            authorAffiliation: formData.get('authorAffiliation'),
            authorCountry: formData.get('authorCountry'),
        });

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Firebase Storage
        const storageRef = ref(storage, `papers/${file.name}`);
        await uploadBytes(storageRef, buffer);
        const fileUrl = await getDownloadURL(storageRef);

        // Prepare paper data
        const paperData = {
            paperTitle: validatedData.paperTitle,
            paperAbstract: validatedData.paperAbstract,
            fileUrl,
            uploadedAt: serverTimestamp(),
            uploadedFile: file.name,
            authorName: validatedData.authorName,
            authorEmail: validatedData.authorEmail,
            authorAffiliation: validatedData.authorAffiliation,
            authorCountry: validatedData.authorCountry,
        };

        // Save to Firestore
        await addDoc(collection(db, 'papers'), paperData);

        return NextResponse.json({ message: 'Paper uploaded successfully' }, { status: 200 });
    } catch (error) {
        console.error('Upload error:', error);

        if (error.name === 'ZodError') {
            return NextResponse.json({
                error: 'Validation error',
                details: error.errors
            }, { status: 400 });
        }

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
