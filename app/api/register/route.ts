import connectMongoDB from "@/libs/mongodb" ;
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require('bcryptjs');
import ResumeInformation from "../../models/resumeInformation";
import User from "../../models/userSchema"


export async function POST(request : NextRequest){
   // Create a new resume information object
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
    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(user.password, salt);
 
    let name = user.name;
    let email = user.email;
    let role = user.role;

    // Create a new user
    const newUser  = await User.create({name, email, password: hashedPassword,  role});
    await newUser.save();
    const userId = newUser._id;

    // Create a new student or mentor
    if(role === 'candidate'){
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
    }
    else if (role === 'recruiter') {
        console.log("recruiter");
    } 
    else {
        return NextResponse.json({ message: 'Invalid role. Role must be either "student" or "mentor".' });
    }
}