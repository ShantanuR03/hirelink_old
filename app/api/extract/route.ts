// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import path from "path";

// Define the route handler with file upload handling
export async function POST(request: NextRequest): Promise<NextResponse> {
    const form = new formidable.IncomingForm();
    form.uploadDir = "/"; 
    form.keepExtensions = true;
    form.maxFileSize = 10000000; // 10MB file size limit

    return new Promise((resolve, reject) => {
        form.parse(request, (err, fields, files) => {
            if (err) {
                reject(err);
                return;
            }

            // Assuming 'profile' is the field name for the file upload
            const file = files.profile;
            if (!file) {
                reject(new Error("No file uploaded"));
                return;
            }

            // Move the uploaded file to the desired location
            const newPath = path.join(form.uploadDir, file.name);
            fs.rename(file.path, newPath, (err) => {
                if (err) {
                    reject(err);
                    return;
                }

                // Return a response with the file URL
                resolve(NextResponse.json({
                    success: 1,
                    profile_url: `http://localhost:3000/profile/${file.name}`
                }));
            });
        });
    });
}
