import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import ResumeInformation from "../../models/resumeInformation";

export async function POST(request: NextRequest) {
    const {
        user,
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
    } = await request.json();

    await connectMongoDB();

    try {
         // Create a new resume information object
        const newResumeInformation = new ResumeInformation({
            user,
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
        });

        await newResumeInformation.save();
        return NextResponse.json({
            message: "Resume Information Created.",
            newResumeInformation
        });
    } catch (error) {
        console.error("Error creating resume information:", error);
        return NextResponse.error("Failed to create resume information.");
    }
}
