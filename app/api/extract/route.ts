// // Import necessary modules
// import { NextRequest, NextResponse } from "next/server";
// import formidable from "formidable";
// import fs from "fs";
// import path from "path";

// // Define the route handler with file upload handling
// export async function POST(request: NextRequest): Promise<NextResponse> {
//     const form = new formidable.IncomingForm();
//     form.uploadDir = "/"; 
//     form.keepExtensions = true;
//     form.maxFileSize = 10000000; // 10MB file size limit

//     return new Promise((resolve, reject) => {
//         form.parse(request, (err, fields, files) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }

//             // Assuming 'profile' is the field name for the file upload
//             const file = files.profile;
//             if (!file) {
//                 reject(new Error("No file uploaded"));
//                 return;
//             }

//             // Move the uploaded file to the desired location
//             const newPath = path.join(form.uploadDir, file.name);
//             fs.rename(file.path, newPath, (err) => {
//                 if (err) {
//                     reject(err);
//                     return;
//                 }

//                 // Return a response with the file URL
//                 resolve(NextResponse.json({
//                     success: 1,
//                     profile_url: `http://localhost:3000/profile/${file.name}`
//                 }));
//             });
//         });
//     });
// }

import nextConnect from 'next-connect';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

const handler = nextConnect();

handler.use(async (req, res, next) => {
 if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'public/uploads');
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the form' });
      }
      // Handle the uploaded files here
      // For example, move them to a permanent location
      for (const file of Object.values(files)) {
        const oldPath = file.path;
        const newPath = path.join(form.uploadDir, file.name);
        await fs.rename(oldPath, newPath);
      }
      res.status(200).json({ message: 'File uploaded successfully' });
    });
 } else {
    next();
 }
});

export default handler;
