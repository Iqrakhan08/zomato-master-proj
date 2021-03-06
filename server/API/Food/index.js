//libraries
import express from "express";
import passport from "passport";

//databse model
import { FoodModel } from "../../database/allModels";

//validation
import { ValidateRestaurantId,Validatecategory } from "../../validation/food";

const Router=express.Router();

/*
Route        /r
des          get all food based on particular restaurant
params        id
access        public
method        get
*/
Router.get("/r/:_id",async(req,res)=>{
     try{
         await ValidateRestaurantId(req.params);
      const{_id}=req.params;
      const foods=await FoodModel.find({restaurant:_id});

      return res.json({foods});
     }catch (error){
         return res.status(500).json({error:error.message});
     }
});

/*
Route        /c
des          get all food based on particular restaurant
params        categoryt
access        public
method        get
*/
Router.get("/r/:category",async(req,res)=>{
    try{
        await Validatecategory(req.params);
     const{category}=req.params;
     const foods=await FoodModel.find({
         category:{$regex:category,$options:"i"},
        });

     return res.json({foods});
    }catch (error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;