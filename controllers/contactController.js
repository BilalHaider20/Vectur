
import { connectToDatabase } from '../lib/mongodb';
import Contact from '../models/Contact';

export async function submitContactForm(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        await connectToDatabase();

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;

        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Email format is invalid' });
        }


        const contact = await Contact.create({ name, email, message });
        
        res.status(201).json({
            message: 'Contact submitted successfully',
            status: 201,
             contact: {
                name: contact.name,
                email: contact.email,
                message: contact.message,
            }
        });

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}   
