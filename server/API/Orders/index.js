//libraries
import express from "express";
import passport from "passport";

//databse model
import { OrderModel } from "../../database/allModels";

const Router=express.Router();

/*
Route        /
des          get all ordes based on id
params        _id
access        public
method        get
*/
Router.get("/:_id",
passport.authenticate("jwt",{session:false}),
async(req,res)=>{
    try{
        const {_id}=req.params;
        const getOrders=await OrderModel.findOne({user:_id});

        if(!getOrders){
            return res.status(404).json({error:"User not found"});
        }

        return res.status(200).json({orders:getOrders});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

/*
Route        /
des          get all ordes based on id
params        _id
access        public
method        get
*/
Router.post("/new/:_id",async(req,res)=>{
    try{
        const{_id}=req.params;
        const{orderDetails}=req.params;

        const addNewOrder=await OrderModel.findOneAndUpdate(
            {
                user:_id,
            },
            {
                $push:{orderDetails},
            },
            {new:true}
        );

        return res.json({order:addNewOrder});

    }catch(error){
        return res.status(500).json({error:error.message});
    }
});


export default Router;