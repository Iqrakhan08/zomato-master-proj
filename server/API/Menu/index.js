//libraries
import express from "express";
import passport from "passport";

//databse model
import { MenuModel } from "../../database/allModels";

const Router=express.Router();
/*
Route        /list
des          get all the menu baised on id
params        _id
access        public
method        GET
*/
Router.get("/list/:_id",async(req,res)=>{
    try{
        const{_id}=req.params;
        const menus=await MenuModel.findOne(_id);

        return res.json({menus});
    }catch (error){
    return res.status(500).json({error:error.message});
    }
});

/*
Route        /image
des          get all the menu images baised on id
params        _id
access        public
method        GET
*/
Router.get("/image/:_id",async(req,res)=>{
    try{
        const{_id}=req.params;
        const menus=await ImageModel.findOne(_id);

        return res.json({menus});
    }catch (error){
    return res.status(500).json({error:error.message});
    }
});

export default Router;
