import mongoose, { Schema } from 'mongoose';
import User from "../models/userSchema"

const contactInformationSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
});

const personalInfoSchema = new Schema({
    degree: { type: String },
    major: { type: String },
    university: { type: String },
    graduationDate: { type: String },
})

const recruiterRoleSchema = new Schema({
    jobTitle: { type: String },
    company: { type: String },
    location: { type: String },
    startDate: { type: String },
})

const resumeInformationSchema = new Schema({
    user : User,
    contactInformation: contactInformationSchema,
    personalInfo: personalInfoSchema,
    recruiterRole: recruiterRoleSchema,
});

const ResumeInformation = mongoose.models.ResumeInformation || mongoose.model('ResumeInformation', resumeInformationSchema);
export default ResumeInformation;