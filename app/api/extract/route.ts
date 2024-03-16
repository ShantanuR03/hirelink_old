import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import { exec } from "child_process";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const resume = formData.get("file");

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
    if (!filename.endsWith(".pdf")) {
      return NextResponse.json(
        { error: "Only PDF files are allowed." },
        { status: 400 }
      );
    }
    // Write the file to the public directory
    await writeFile(
      path.join(process.cwd(), "/app/assets/" + "resume.pdf"),
      buffer
    );

    //check if file was written successfully
    const file = path.join(process.cwd(), "/app/assets/" + "resume.pdf");
    // console.log("File written successfully");

    //call a process 'node extract.js' to extract the data from the resume
    const extractScriptPath = path.join(
      process.cwd(),
      "/libs/extractDataFromPDF.ts"
    );
    const command = `node ${extractScriptPath}`;
    return new Promise((resolve, reject) => {
    exec(command, (err: any, stdout: any, stderr: any) => {
      if (err) {
        console.error(err);
        reject(NextResponse.json({ message: "Failed", status: 500 }));
      } else{


      //remove markdown codeblock ticks from the output, and return the json object, only on first and last line
      stdout = stdout.replace(/```/g, "");
      stdout = stdout.replace("```json", "");
      stdout = stdout.replace("```JSON", "");


      //change output to json object
      let output = JSON.parse(stdout);
      console.log("Output: ", output);
      resolve(NextResponse.json({ message: output, status: 200 }));
      }
     
    });
  }
  );
  }
  catch (error) {
    return NextResponse.json({ message: "Failed", status: 500 });
  }
}

