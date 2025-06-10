import { submitJobApplication } from '../../controllers/JobApplicationController';
import { runMiddleware } from '../../lib/middlewareWrapper';
import { uploadResume } from '../../middleware/upload';


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const middlewareR = await runMiddleware(req, res, uploadResume); // handle file
    console.log('Middleware executed successfully:', middlewareR);
    await submitJobApplication(req, res);         // handle db logic
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
