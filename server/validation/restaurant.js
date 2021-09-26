import joi from "joi";

 export const ValidateRestaurantCity=(restaurantobj)=>{
    const Schema=joi.object({
     city:joi.string().required(),
    });

   return Schema.validateAsync(restaurantobj);
};

export const ValidateRestaurantSearchString=(restaurantobj)=>{
    const Schema=joi.object({
     searchString:joi.string().required(),
    });
    
   return Schema.validateAsync(restaurantobj);
};