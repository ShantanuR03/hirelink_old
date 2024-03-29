import mongoose, { Schema } from 'mongoose';

const contactInformationSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: false },
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

const securitySchema = new mongoose.Schema({
    password: { type: String },
    confirmPassword: { type: String }
});

const roleScheema = new mongoose.Schema({
    data: { type: String}
});


const resumeInformationSchema = new Schema({
    contactInformation: contactInformationSchema,
    summary: { type: String },
    education: [educationSchema],
    workExperience: [workExperienceSchema],
    skills: [{ type: String }],
    certifications: [certificationSchema],
    projects: [projectSchema],
    achievements: [achievementSchema],
    additionalInformation: additionalInformationSchema,
    security : securitySchema,
    role : roleScheema
});

const ResumeInformation = mongoose.models.ResumeInformation || mongoose.model('ResumeInformation', resumeInformationSchema);
export default ResumeInformation;
