import express from 'express';
import { addMovie,listMovie, removeMovie } from '../controllers/movieController.js';
import multer from 'multer';

const movieRouter = express.Router();

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage});

movieRouter.post("/add", upload.single("image"),addMovie)
movieRouter.get("/list", listMovie)
movieRouter.post("/remove", removeMovie)
export default movieRouter