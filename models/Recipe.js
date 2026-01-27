import mongoose from "mongoose";

//this is an DB columns
const recipeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    ingerident:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})

export default mongoose.models.User || mongoose.model('Recipe',recipeSchema)