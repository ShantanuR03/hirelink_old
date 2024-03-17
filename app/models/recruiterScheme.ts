import mongoose, { Schema } from 'mongoose';
import User from "../models/userSchema"

const contactInformationSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: { type: String },
});

const companyInformationSchema = new Schema({
    companyName: { type: String },
    companyAddress: { type: String },
    companyPhone: { type: String },
    companyEmail: { type: String },
    companyWebsite: { type: String },
    companyDescription: { type: String },
});


const recruiterSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    contactInformation: contactInformationSchema,
    componeyInformation: companyInformationSchema,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('Recruiter', recruiterSchema);
