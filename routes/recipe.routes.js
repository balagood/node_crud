import { Router } from "express";
import {createRecipe, getAllRecipe,getRecipeById,updateRecipe,deleteRecipe } from "../controllers/recipe.controller.js";

const router = Router()

//given an over all routes  create,all,getId,update,delete
router.get('/',getAllRecipe)
router.get('/:id',getRecipeById)
router.post('/',createRecipe)
router.put('/:id',updateRecipe)
router.delete('/:id',deleteRecipe)

export default router