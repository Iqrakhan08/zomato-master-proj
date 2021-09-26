//libraries
import express from "express";
import passport from "passport";

//databse model
import { RestaurantModel } from "../../database/allModels";

//validation
import { ValidateRestaurantCity,ValidateRestaurantSearchString} from "../../validation/restaurant";
import { ValidateRestaurantId } from "../../validation/food";

const Router=express.Router();
/*
Route        /
des          get all the res details baised on cities
params        none
access        public
method        get
*/
Router.get("/",async(req,res)=>{
 try{
     await ValidateRestaurantCity(req.query);
     const {city}=req.query;
     const restaurants=await RestaurantModel.find({city});

     return res.json({restaurants});
}catch(error){
    return res.status(500).json({error:error.message});
}
});

/*
Route        /
des          get individualthe res details baised on id
params        id
access        public
method        get
*/
Router.get("/:_id",async(req,res)=>{
    try{
        await ValidateRestaurantId(req.params);
        const {_id}=req.params;
        const restaurant=await RestaurantModel.findOne(_id);
        if(!restaurant)
        return res.status(404).json({error:"Restaurant not found"});
        return res.json({restaurant});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route        /search
des          get individualthe res details baised on search string
params        none
access        public
body          searchstrring
method        get
*/
Router.get("/search",async(req,res)=>{
    try{
        await ValidateRestaurantSearchString(req.body);
        const{searchString}=req.body;

        const restaurants=await RestaurantModel.find({
            name:{$regex:searchString,$options:"i"},
        });
        if(!restaurants)
        return res.status(404).json({error:`No Restaurant matched with ${searchString}`});
        return res.json({restaurants});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

 
export default Router;