import express from 'express'
import recipeRouter from './routes/recipe.routes.js'
import mongoose from 'mongoose'

//use an express
const app = express()

//connecting database
mongoose.connect('mongodb://127.0.0.1:27017/node_crud')
.then(()=>console.log("Mondodb connected"))
.catch((err)=>console.log(err))

app.use(express.json())

//give the routers
app.use('/recipes',recipeRouter);


//start the server and listen an 8000
app.listen(8000,()=>{
    console.log('Server is listening on port 8000')
})