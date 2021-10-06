import React from "react";
import {TiStarFullOutline} from "react-icons/ti";

const ReviewCard=()=>{
    return(
    <>
    <div className="my-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
                <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/aae/5ce2a388295d48dd4fe320636a5d3aae.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
                />
            </div>
            <div className="flex flex-col ">
                <h3 className="text-lg font-semibold">Amit Pandey</h3>
           <small className="text-gray-500">525 Reviews &#8226; 2010 Followers</small>
            </div>
            </div>
            <button className="text-zomato-400 border border-zomato-400 py-2 px-2 rounded-lg">Follow</button>
        </div>
      <div className="flex flex-col gap-3">
         <div className="flex items-center gap-3">
           <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
               5 <TiStarFullOutline/>
           </span>  
           <h5 className="font-regular uppercase">Delivery</h5>
           <small className="text-gray-500">4 months ago</small>
      </div> 
      <div className="w-full text-gray-600 font-light text-base">
          <p>
          Recently ordered a food from here, it was too superb in taste. Delivery was done on perfect time, packaging was done good. Quality and quantity of the food was good enough. I liked the taste of the food.
          I ordered
          Taiwanese fried chicken popcorn
          Korean tenderloin bulgogi
  
          </p>
      </div>
      </div>
    </div>
    </>
   );
};

export default ReviewCard;