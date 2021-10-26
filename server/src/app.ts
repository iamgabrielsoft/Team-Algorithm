import express from 'express';
import { create } from 'ipfs-http-client';
import multer from 'multer';
import fs from 'fs';
import { config } from './config';

// connect to the default API address http://localhost:5001
const ipfs = create({
  host: '127.0.0.1',
  port: 5001,
  protocol: 'http',
});
const app = express();
const upload = multer({ dest: 'uploads/' });
const MAX_SIZE = 52428800;

export interface MulterFile {
  key: string; // Available using `S3`.
  path: string; // Available using `DiskStorage`.
  mimetype: string;
  originalname: string;
  size: number;
}

const addFile = async (data) => {
  try {
    const { cid } = await ipfs.add(data);

    return cid;
  } catch (error) {
    throw new Error(error);
  }
};

app.get('/', (req, res) => res.send('Welcome to Team-Algorithm APP'));

app.post(
  '/upload',
  upload.single('upload'),
  async (
    req: express.Request & { file: MulterFile },
    res: express.Response,
  ) => {
    console.log(req.file);
    if (!req.file) {
      return res.status(422).json({
        error: 'File needs to be provided.',
      });
    }

    const mime = req.file.mimetype;
    if (mime.split('/')[0] !== 'image') {
      return res.status(422).json({
        error: 'File needs to be an image.',
      });
    }

    const fileSize = req.file.size;
    if (fileSize > MAX_SIZE) {
      return res.status(422).json({
        error: `Image needs to be smaller than ${MAX_SIZE} bytes.`,
      });
    }

    const data = fs.readFileSync(req.file.path);
    console.log('data', data);
    const fileHash = await addFile(data);

    return res.send(`http://gateway.ipfs.io/ipfs/${fileHash}`);
  },
);

app.use(express.json());

app.listen(config.PORT, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${config.PORT}`,
  );
});
