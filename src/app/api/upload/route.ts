// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import path from 'path';
import fs from 'fs/promises';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

const ensureUploadDir = async () => {
  try {
    await fs.access(uploadDir);
  } catch {
    await fs.mkdir(uploadDir, { recursive: true });
  }
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log('Upload request received');

  try {
    await ensureUploadDir();
    console.log('Upload directory verified:', uploadDir);

    return new Promise((resolve, reject) => {
      const form = formidable({
        maxFiles: 1,
        maxFileSize: 5 * 1024 * 1024, // 5MB
        uploadDir,
        filename: (_name, _ext, part) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const filename = `${uniqueSuffix}${path.extname(part.originalFilename || '')}`;
          console.log('Generated filename:', filename);
          return filename;
        },
      });

      form.parse(req, async (err,  fields, files: formidable.Files) => {
        if (err) {
          console.error('Form parse error:', err);
          res.status(500).json({ error: { message: err.message } });
          return resolve(true);
        }

        try {
          console.log('Files received:', files);
          const fileField = files.file;
          
          if (!fileField) {
            throw new Error('No file received');
          }

          const file = Array.isArray(fileField) ? fileField[0] : fileField;

          if (!file) {
            throw new Error('Invalid file received');
          }

          const filename = path.basename(file.filepath);
          const url = `/uploads/${filename}`;

          console.log('Upload successful:', {
            originalName: file.originalFilename,
            size: file.size,
            url
          });

          res.status(200).json({
            uploaded: true,
            url
          });
          
          return resolve(true);
        } catch (error) {
          console.error('Processing error:', error);
          res.status(500).json({ 
            error: { 
              message: error instanceof Error ? error.message : 'Unknown error'
            } 
          });
          return resolve(true);
        }
      });
    });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      error: { 
        message: error instanceof Error ? error.message : 'Unknown error'
      } 
    });
  }
}