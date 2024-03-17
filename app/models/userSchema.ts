import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true, unique:false},
    password: { type: String , required: true},
    role: { type: String}
});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;