import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({
    name:{
        type: Number, require:true
    },
    name:{
        type: String, require:true
    },
    time:{
        type: Number, require:true
    },
    year:{
        type: Number, require:true
    },
    image:{
        type: String, require:true
    },
    introduce:{
        type: String, require:true
    }
})

const movieModel= mongoose.model.movie ||mongoose.model("movie",MovieSchema);

export default movieModel;