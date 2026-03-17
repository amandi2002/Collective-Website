import { NextResponse } from 'next/server';

// Placeholder for MongoDB connection in the future
// import dbConnect from '@/lib/dbConnect';
// import Contact from '@/models/Contact';

export async function POST(request: Request) {
    try {
        const { name, email, phone, subject, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // TODO: Initialize real MongoDB connection here
        // await dbConnect();
        // await Contact.create({ name, email, phone, subject, message });

        console.log('Contact form submission received:', { name, email, phone, subject, message });

        return NextResponse.json(
            { success: true, message: 'Your message has been sent successfully.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in contact API:', error);
        return NextResponse.json(
            { error: 'An error occurred while processing your request.' },
            { status: 500 }
        );
    }
}
