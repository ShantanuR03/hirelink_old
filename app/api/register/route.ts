import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
import ResumeInformation from "../../models/resumeInformation";
import User from "../../models/userSchema";

export async function POST(request: NextRequest) {
  console.log("Database");
  

  const resumeInformation = await request.json();
  console.log(resumeInformation);
  

 
  
  
  

  await connectMongoDB();
  // Hash the password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(
    resumeInformation.security.password,
    salt
  );

  const name =
  resumeInformation.contactInformation.firstName +
    " " +
    resumeInformation.contactInformation.lastName;
  const email = resumeInformation.contactInformation.email;
  const userrole = resumeInformation.role.data;
  console.log("user Role",userrole);
  

  // Create a new user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: userrole,
  });
  await newUser.save();
  const userId = newUser._id;

  // Create a new student or mentor
  if (userrole === "candidate") {
    console.log("called");
    
    const newResumeInformation = await ResumeInformation.create(resumeInformation);
    console.log("new resume information :", newResumeInformation);
    

    await newResumeInformation.save();
    return NextResponse.json({
        message: 'Success',
      });
    
  } else if (userrole === "recruiter") {
    console.log("recruiter");
  } else {
    return NextResponse.json({
      message: 'Invalid role. Role must be either "student" or "mentor".',
    });
  }
}
