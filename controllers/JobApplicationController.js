import { connectToDatabase } from '../lib/mongodb';
import JobApplication from '../models/JobApplication';

export async function submitJobApplication(req, res) {
    await connectToDatabase();

    const { name, email, yearsOfExperience, cnic, role } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: 'Resume is required' });
    }

    if (!name || !email || !yearsOfExperience || !cnic || !role) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Email format is invalid' });
    }


    try {
        const existingEmail = await JobApplication.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Your response is already submitted' });
        }

        // Check for duplicate CNIC
        const existingCnic = await JobApplication.findOne({ cnic });
        if (existingCnic) {
            return res.status(400).json({ error: 'CNIC is already taken' });
        }


        const application = await JobApplication.create({
            name,
            email,
            yearsOfExperience,
            cnic,
            role,
            resume: req.file.filename,
        });


        res.status(201).json({
            message: 'Application submitted successfully',
            status: 201,
        });
    } catch (error) {
        console.log('Error submitting application:', error);
        res.status(500).json({ error: 'Error in submitting form' });
    }
}
