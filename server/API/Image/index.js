//libraries
import express from "express";
import passport from "passport";
import multer from "multer";

//databse model
import { ImageModel } from "../../database/allModels";

//utilities
import {s3Upload} from "../../Utils/AWS/s3";

const Router=express.Router();

//multer config
const storage=multer.memoryStorage();
const upload=multer({storage});


/*
Route        /image
des          uploads given image to s3 bucket ans saves file link to mongdb
params        id
access        public
method        get
*/
Router.post("/",upload.single("file"),async(req,res)=>{
    try{
      const file=req.file;

      //s3 bucket options
      const bucketOptions={
          Bucket:"fullstackwebdevelpoment",
          Key:file.originalname,
          Body:file.buffer,
          ContentType:file.mimetype,
          ACL:"public-read",
      };

      const uploadImage=await s3Upload(bucketOptions);

    return res.status(200).json({uploadImage});
    }catch(error){
        return res.status(500).json({error:error.message});
    }
});

export default Router;