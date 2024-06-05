import express from 'express'
import cors from 'cors'
import { connectDb } from './config/db.js';
import movieRouter from './routes/movieRoute.js';
import userRouter from './routes/userRoute.js';
import'dotenv/config.js'

const app = express();
const port= 2024;

app.use(express.json());
app.use(cors());
connectDb(); 
//end point
app.use("/api/movie",movieRouter)
app.use("/image",express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/",(req,res)=>{
    res.send("hello");
})
app.listen(port,()=>{
    console.log("On")
})
