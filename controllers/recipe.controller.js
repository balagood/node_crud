import { findAllRecipes,getRecipeByDetail,addRecipe,updateRecipeDetail,removeRecipe } from '../services/recipe.service.js'


//get all recipe
export const getAllRecipe = async (req,res)=>{
    const recipes = await findAllRecipes()
    res.json(recipes)
    res.status(200)
}


//get recipe by id
export const getRecipeById = async (req,res)=>{
    const recipe = await getRecipeByDetail(req.params.id)
    if(!recipe){
        res.status(404)
        res.json({message:'Recipe is not found'})
    }
    res.json(recipe)
    res.status(200)
}


//create an reecipe
export const createRecipe = async (req,res)=>{
    const recipe = await addRecipe(req.body)
    res.json(recipe)
    res.status(201)
}


//update recipe
export const updateRecipe = async (req,res) => {
    const recipe = await updateRecipeDetail(req.params.id,req.body)
    res.json(recipe);
}

//delete recipe
export const deleteRecipe = async(req,res)=>{
    const recipe = await removeRecipe(req.params.id)
    res.status(204)
    res.send('recipes is deleted')
}

