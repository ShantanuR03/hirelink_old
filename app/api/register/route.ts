import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import ResumeInformation, { ResumeInformationModel } from "../../models/resumeInformation";

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const {
            contactInformation,
            summary,
            education,
            workExperience,
            skills,
            certifications,
            projects,
            achievements,
            additionalInformation,
            references,
            password
        } = await request.json();

        await connectMongoDB();

        // Hash the password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create a new resume information object
        const newResumeInformation: ResumeInformationModel = new ResumeInformation({
            contactInformation,
            summary,
            education,
            workExperience,
            skills,
            certifications,
            projects,
            achievements,
            additionalInformation,
            references,
            password: hashedPassword // Save hashed password
        });

        await newResumeInformation.save();
        return NextResponse.json({
            message: "Resume Information Created.",
            newResumeInformation
        });
    } catch (error) {
        console.error("Error creating resume information:", error);
        return NextResponse.error(new Error("Failed to create resume information."));
    }
}
