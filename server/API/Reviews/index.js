//libraries
import express from "express";
import passport from "passport";

//databse model
import { ReviewModel } from "../../database/allModels";

const Router=express.Router();

/*
Route        /food/new
des          add new food rating
params        none
body          review object
access        public
method        POST
*/
Router.post("/food/new",async(req,res)=>{
    try{
      const{reviewData}=req.body;
      await ReviewModel.create(reviewData);
      return res.json({review:"Sucessfully Created Review"});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route        /delete
des          add new food rating
params        _id
body          none
access        public
method        DELETE
*/
Router.delete("/delete/:_id",async(req,res)=>{
    try{
        const{_id}=req.params;
       await ReviewModel.findByIdAndDelete(_id);

       return res.json({review:"Sucessfully Deleted the Review."});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;