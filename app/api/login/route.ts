// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connectMongoDB from "@/libs/mongodb";

// Connect to MongoDB
connectMongoDB();

export async function POST(request: NextRequest) {
    try {
        // Destructure email and password from the request JSON body
        const { email, password } = await request.json();
        
        const user = await User.findOne({ email });

        if (!user) {
            // If the user is not found, return an error response
            console.log({
                error: "User does not exist."
            });
            return NextResponse.json({ 
                status: 404,
                error: "User does not exist." 
            });
        }
        // Compare the password
        const validPassword = await bcryptjs.compare(password, user.password);

        if (!validPassword) {
            // If the password is invalid, return an error response
            return NextResponse.json({ 
                status: 401,
                error: "Invalid password." });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            role: user.role
        };

        // Create a token with an expiration of 1 hour
        const token = jwt.sign(tokenData, process.env.SECRET_KEY!, { expiresIn: '1h' });
        // Return success response with token
        const response =  NextResponse.json({
            status : 200,
            message: "Successfully logged in.",
            role : user.role
        });

        response.cookies.set("token", token, {
            httpOnly: true
        });

        return response;
    } catch (error) {
        // Log the error and return an error response
        console.error("Error logging in:", error);
        return NextResponse.json({ 
            status: 500,
            error: "Error logging in. Please try again." });
    }
}