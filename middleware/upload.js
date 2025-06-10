import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = './uploads/resumes';
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!['.pdf', '.doc', '.docx'].includes(ext)) {
      return cb(new Error('Only .pdf, .doc, .docx files are allowed'));
    }
    cb(null, true);
  },
});

export const uploadResume = upload.single('resume');
