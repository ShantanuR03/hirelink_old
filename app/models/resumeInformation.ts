import mongoose, { Schema } from 'mongoose';
import User from "../models/userSchema"

const contactInformationSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String }
});

const educationSchema = new Schema({
    degree: { type: String },
    school: { type: String },
    major: { type: String },
    graduationDate: { type: String },
    aggregateMarks: { type: Number }
});

const workExperienceSchema = new Schema({
    jobTitle: { type: String },
    company: { type: String },
    location: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String }
});

const certificationSchema = new Schema({
    name: { type: String },
    issuingOrganization: { type: String },
    issuedDate: { type: String },
    expiryDate: { type: String }
});

const projectSchema = new Schema({
    title: { type: String },
    date: { type: String },
    description: { type: String }
});

const achievementSchema = new Schema({
    title: { type: String },
    date: { type: String }
});

const additionalInformationSchema = new Schema({
    languages: [{ type: String }],
    volunteerExperience: { type: String },
    publications: { type: String },
    interests: [{ type: String }]
});


const resumeInformationSchema = new Schema({
    user : User,
    contactInformation: contactInformationSchema,
    summary: { type: String },
    education: [educationSchema],
    workExperience: [workExperienceSchema],
    skills: [{ type: String }],
    certifications: [certificationSchema],
    projects: [projectSchema],
    achievements: [achievementSchema],
    additionalInformation: additionalInformationSchema,
    
});

const ResumeInformation = mongoose.models.ResumeInformation || mongoose.model('ResumeInformation', resumeInformationSchema);
export default ResumeInformation;
