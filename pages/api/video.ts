import type { NextApiRequest, NextApiResponse } from "next";

const azure = require('azure-storage');
const storageAccountName = process.env.storageAccountName;
const storageAccessKey = process.env.storageAccessKey;

function createBlobService() {
  return azure.createBlobService(storageAccountName, storageAccessKey);
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const blobPath = req.query.path;
  const blobService = createBlobService();
  const containerName = 'videos';

  blobService.getBlobProperties(containerName, blobPath, (err: any, properties: any) => {
    if (err) return;
    res.writeHead(200, {
      'Content-Length': properties.contentLength,
      'Content-Type': 'video/mp4',
    });

    blobService.getBlobToStream(containerName, blobPath, res, (err: any) => {
      if (err) return;
    });
  });
}
