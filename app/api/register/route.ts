import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
import ResumeInformation from "../../models/resumeInformation";
import User from "../../models/userSchema";

export async function POST(request: NextRequest) {
  console.log("Database");
  
  const resumeInformation = await request.json();


     
//   const resumeInformation = {
//     contactInformation: {
//       firstName: "John",
//       lastName: "Doe",
//       email: "johndoe@example.com",
//       phone: "123-456-7890",
//       address: "123 Main St, City, Country",
//     },
//     summary:
//       "Experienced software engineer with expertise in web development and a passion for problem-solving.",
//     education: [
//       {
//         degree: "Bachelor of Science",
//         school: "University of Example",
//         major: "Computer Science",
//         graduationDate: "May 2022",
//         aggrigateMarks: 3.8,
//       },
//       {
//         degree: "Master of Business Administration",
//         school: "Business School",
//         major: "Business Administration",
//         graduationDate: "December 2024",
//         aggrigateMarks: 3.9,
//       },
//     ],
//     workExperience: [
//       {
//         jobTitle: "Software Engineer",
//         company: "TechCorp",
//         location: "New York, NY",
//         startDate: "June 2022",
//         endDate: "Present",
//         description:
//           "Developing scalable web applications using React and Node.js.",
//       },
//       {
//         jobTitle: "Intern",
//         company: "StartupX",
//         location: "San Francisco, CA",
//         startDate: "May 2021",
//         endDate: "August 2021",
//         description:
//           "Assisted in front-end development tasks and conducted market research.",
//       },
//     ],
//     skills: ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python"],
//     certifications: [
//       {
//         name: "AWS Certified Developer",
//         issuingOrganization: "Amazon Web Services",
//         issuedDate: "January 2023",
//         expiryDate: "January 2026",
//       },
//       {
//         name: "Google Certified Professional Cloud Architect",
//         issuingOrganization: "Google Cloud",
//         issuedDate: "March 2023",
//         expiryDate: "March 2026",
//       },
//     ],
//     projects: [
//       {
//         title: "E-commerce Website",
//         date: "2022",
//         description:
//           "Developed a full-stack e-commerce website using MERN stack.",
//       },
//       {
//         title: "Data Analysis Tool",
//         date: "2021",
//         description:
//           "Created a data analysis tool using Python and pandas library.",
//       },
//     ],
//     achievements: [
//       {
//         title: "Dean's List for Academic Excellence",
//         date: "2021",
//       },
//       {
//         title: "Hackathon Winner",
//         date: "2020",
//       },
//     ],
//     additionalInformation: {
//       languages: ["Spanish", "French"],
//       volunteerExperience: "Volunteered at local animal shelter.",
//       publications: "Published research paper on artificial intelligence.",
//       interests: ["Hiking", "Photography"],
//     },
//     references: [
//       {
//         name: "Jane Smith",
//         title: "Senior Software Engineer",
//         company: "TechCorp",
//         contactInformation: "janesmith@example.com, 987-654-3210",
//       },
//     ],
//     security: {
//       password: "hilsakdf",
//       confirmPassword: "hilsakdf",
//     },
//     role : {role: "candidate"}
//   };

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
  const userrole = resumeInformation.role.role;
  console.log(userrole);
  

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
    const newResumeInformation = await ResumeInformation.create(resumeInformation);

    await newResumeInformation.save();

    
  } else if (userrole === "recruiter") {
    console.log("recruiter");
  } else {
    return NextResponse.json({
      message: 'Invalid role. Role must be either "student" or "mentor".',
    });
  }
}
