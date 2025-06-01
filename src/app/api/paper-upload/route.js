// pages/api/paper-upload.js
import { NextResponse } from 'next/server';
import formidable from 'formidable';
import fs from 'fs/promises';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('uploadedFile');
        const authors = JSON.parse(formData.get('authors'));

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // Convert file to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload to Firebase Storage
        const storageRef = ref(storage, `papers/${file.name}`);
        await uploadBytes(storageRef, buffer);
        const fileUrl = await getDownloadURL(storageRef);

        // Prepare paper data
        const paperData = {
            paperTitle: formData.get('paperTitle'),
            paperAbstract: formData.get('paperAbstract'),
            paperKeywords: formData.get('paperKeywords'),
            paperDocumentType: formData.get('paperDocumentType'),
            paperTopic: formData.get('paperTopic'),
            authors: authors,
            fileUrl,
            uploadedAt: serverTimestamp(),
            uploadedFile: file.name,
            uploaderName: formData.get('uploaderName'),
            uploaderEmail: formData.get('uploaderEmail'),
            uploaderAffiliation: formData.get('uploaderAffiliation'),
            uploaderCountry: formData.get('uploaderCountry'),
        };

        // Save to Firestore
        await addDoc(collection(db, 'papers'), paperData);

        return NextResponse.json({ message: 'Paper uploaded successfully' }, { status: 200 });
    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
