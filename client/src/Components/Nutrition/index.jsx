import React from "react";

//components
import NutritionHeroCarousel from "./NutritionHeroCarousel";
import NutritionCarousel from "./NutritionCarousel";
import NutritionCard from "./NutritionCard";

const Nutrition=()=>{
    return (
        <div>
            <NutritionHeroCarousel/>
            <div className="my-6">
            <NutritionCarousel/>
            </div>
            <div className="flex flex-wrap justify-between">
                <NutritionCard 
                bg="red"
                image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              />
                </div>
                <div className="flex flex-wrap justify-between">
                <NutritionCard 
                bg="red"
                image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              />
                </div>
                <div className="flex flex-wrap justify-between">
                <NutritionCard 
                bg="red"
                image="https://dote.zmtcdn.com/prod/data/admin_assets/images/985/1db983abf8a38bdebb42171b5ea7d985_1614756360.png?output-format=webp"
              />
                </div>
        </div>
    );
};

export default Nutrition;