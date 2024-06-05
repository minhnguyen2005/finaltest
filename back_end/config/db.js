import mongoose from "mongoose";

 export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://Minh:MinhNhi0508%40@cluster0.wycmwpi.mongodb.net/Movie').then(()=>console.log("Connected"));
}