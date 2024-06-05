import movieModel from "../models/MovieModel.js";
import fs from 'fs';


const addMovie = async(req,res)=>{
   let image_filename = `${req.file.filename}`;

   const movie = new movieModel({
    id:req.body.id,
    name: req.body.name,
    time: req.body.time,
    year: req.body.year,
    image: image_filename,
    introduce: req.body.introduce
   });
   try {
    await movie.save();
    res.json({success:true, message:"Movie added"})
   } catch (error) {
    console.log(error);
    res.json({success: false, message:"Error"})
   }
}

//list movie
const listMovie= async(req,res)=>{
    try {
        const movie = await movieModel.find({});
        res.json({success:true, data: movie})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Error"})
    }
}
//remove 
const removeMovie= async(req, res)=>{
    try {
        const movie = await movieModel.findById(req.body.id);
        fs.unlink(`uploads/${movie.image}`,()=>{});
        res.json({success:true, message:"Movie removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message:"Error"})
    }
}
export{addMovie, listMovie, removeMovie}