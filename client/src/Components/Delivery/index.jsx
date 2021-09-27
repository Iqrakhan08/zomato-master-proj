import React,{useState} from "react";


//components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery=()=>{

    const [restaurntList,setRestaurantList]=useState([
        {
          _id:"123456",
          photos:[
            "https://b.zmtcdn.com/data/pictures/chains/4/36444/3e96dda3299d584911d3b7657aad97b6.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", 
        ],
          name:"Mr. Chow's",
          cuisine:["Chinese,Seafood,Cantonese,Asian,Thai"],
          averageCost:100,
          isPro:true,
          isOff:80,
          durationOfdelivery:47,
          restaurantReviewValue:4.1,
          },
    ]);
    return (
   <>
    <DeliveryCarousel/>
   { /*<Brand/>*/}
    <div className="flex justify-between flex-wrap">
        {restaurntList.map((restaurant)=>(
           <RestaurantCard {...restaurant} key={restaurant._id}/> 
        ))}
    </div>
   </>
    );
};

export default Delivery;