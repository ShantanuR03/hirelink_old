import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { exec } from "child_process";

export async function POST(request: NextRequest): Promise<void | Response> {
  try {
    const formData = await request.formData();
    const resume = formData.get("file");

    if (!resume) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    if (!(resume instanceof Blob)) {
      return NextResponse.json({ error: "File is not a Blob." }, { status: 400 });
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    const filename = resume.name.replaceAll(" ", "_");

    if (!filename.endsWith(".pdf")) {
      return NextResponse.json({ error: "Only PDF files are allowed." }, { status: 400 });
    }

    await writeFile(
      path.join(process.cwd(), "/app/assets/" + "resume.pdf"),
      buffer
    );

    const extractScriptPath = path.join(
      process.cwd(),
      "/libs/extractDataFromPDF.ts"
    );
    const command = `node ${extractScriptPath}`;

    return new Promise<Response>((resolve, reject) => {
      exec(command, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          reject(new Error("Extraction failed"));
        } else {
          stdout = stdout.replace(/```/g, "");
          stdout = stdout.replace("```json", "");
          stdout = stdout.replace("```JSON", "");

          let output = JSON.parse(stdout);
          console.log("Output: ", output);
          resolve(NextResponse.json({ message: output, status: 200 }));
        }
      });
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed", status: 500 });
  }
}
