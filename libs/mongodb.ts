import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        console.log("requested Connection");
        
        // await mongoose.connect("mongodb+srv://murtuzakapasi:THEboss53@cluster0.ivwr4cp.mongodb.net/mentorlink");
        await mongoose.connect("mongodb+srv://Hirelink:hirelink123@hirelink.kzx44r2.mongodb.net/HireLinkDb");
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("database connection  failed !!! " , err);
    }
}


export default connectMongoDB;