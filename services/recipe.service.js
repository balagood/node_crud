//import Recipe from "../models/recipe.model.js"
import Recipe from "../models/Recipe.js"

//given an empty array
let recipes = []

//increment the id
//let id = 1

//get all recipe from here
export const findAllRecipes = async() => {
    const recipes = await Recipe.find({})
    return recipes
}


//create an recipe
export const addRecipe = async(data) =>{
    //const recipe = new Recipe(id++,data.name,data.description,data.ingeritent,data.price)
    const recipe = await Recipe.create(data)
    recipes.push(recipe)
    return recipe
}

//get receipe base on the id
export const getRecipeByDetail = async(id) =>{
    //const recipe = recipes.find(u => u.id === parseInt(id))
    //const recipe =  await Recipe.find({_id:id})
    const recipe =  await Recipe.findById(id)
    return recipe
}


//delete the recipe based on the id
export const removeRecipe = async (id) =>{
    //recipes.filter(u=>u.id !== parseInt(id))   
    const recipe = await Recipe.findByIdAndDelete(id)
    return recipe
}


//updated the recipe based on the id
export const updateRecipeDetail = async(id,data) =>{
    //const recipe = recipes.find(u => u.id === parseInt(id))
    const recipe = await Recipe.findByIdAndUpdate(id,data,{new:true})
    
    if(!recipe){
        //res.status(404)
        //res.json({message:'Recipe is not found'})
        return {
            'status':'404',
            'message':'Recipe is not found'
        }
    }

    // recipe.name = data.name ?? data.name
    // recipe.description = data.description ?? data.description
    // recipe.ingerident = data.ingerident ?? data.ingerident
    // recipe.price = data.price ?? data.price

    return recipe
}