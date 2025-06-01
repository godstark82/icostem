import { db } from '../../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { RegistrationSchema } from '../../../schema/registration-schema';

export async function POST(request) {
    try {
        const rawData = await request.json();

        //! Sanitize the data
        const data = RegistrationSchema.parse(rawData);

        await addDoc(collection(db, 'registrations'), data);
        return new Response(JSON.stringify({ message: 'Registration successful' }), { status: 200 });
    } catch (error) {
        console.error("Registration error:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
} 