import express from 'express'
import recipeRouter from './routes/recipe.routes.js'
import mongoose from 'mongoose'
import dotenv from "dotenv"

//use an express
const app = express()


dotenv.config();
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(uri)
.then(()=>console.log("Mondodb connected"))
.catch((err)=>console.log(err))



app.use(express.json())

//give the routers
app.use('/recipes',recipeRouter);


//start the server and listen an 8000
// app.listen(8000,()=>{
//     console.log('Server is listening on port 8000')
// })

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
