import React from "react";

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout=()=>{
  return(
      <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20">
         <ImageGrid
         images={[
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/2/19726202/d104a004a202e3e0db28d70c04331c98.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",

                 
         ]} 
         />
         </div> 
  </>  
  );
};

export default RestaurantLayout;

