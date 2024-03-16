import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { writeFile } from 'fs/promises';

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const resume = formData.get('file');

    if (!resume) {
        return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    // Ensure resume is a Blob before proceeding
    if (!(resume instanceof Blob)) {
        return NextResponse.json({ error: "File is not a Blob." }, { status: 400 });
    }

    // Convert the file data to a Buffer
    const buffer = Buffer.from(await resume.arrayBuffer());

    // Define the filename, you might want to generate a unique name or use the original filename
    const filename = resume.name.replaceAll(" ", "_");

    try {
        //Only allow pdf files
        if (!filename.endsWith('.pdf')) {
            return NextResponse.json({ error: "Only PDF files are allowed." }, { status: 400 });
        }
        // Write the file to the public directory
        await writeFile(path.join(process.cwd(), "/app/assets/" + 'resume.pdf'), buffer);

        return NextResponse.json({ message: "Success", status: 201 });
    } catch (error) {
        console.log("Error occurred ", error);
        return NextResponse.json({ message: "Failed", status: 500 });
    }
}