import React from "react";
import Slider from "react-slick";


//component
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow,PrevArrow } from "../CarouselArrow";

const DeliveryCarousel=()=>{
    const categories=[
        {
    image:
       "https://b.zmtcdn.com/data/pictures/chains/1/18140741/dfd05d69deb65f9a1987687e6bb7c1a3_o2_featured_v2.jpg?output-format=webp",
     title:"Biryani",   
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    title:"Cake",
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
    title:"Burger",
},
{
    image:"https://b.zmtcdn.com/data/dish_photos/635/03e7f2e87ca9990ce81bf0c2e8953635.jpg?output-format=webp",
    title:"Chicken",
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/e61347d2b01cfae669530bd4b8e778e41632716577.png",
    title:"Rolls",
},
{
    image:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    title:"Momos",
},
{
    image:"https://b.zmtcdn.com/data/dish_images/143362c452f062db3bcdece091e541e11599898855.png",
    title:"Aamras",
},
];
const settings={
    arrows:true,
    infinite:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
};

  return (
        <>
        <h1 className="text-xl mb-4 font-semibold">Inspiration for your first order
        </h1>
        <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
         {categories.map((food)=>(
             <DeliveryCategory {...food}/>
         ))}
        </div>
       <div className="hidden lg:block">
           <Slider {...settings}>
           {categories.map((food)=>(
             <DeliveryCategory {...food}/>
         ))}
           </Slider>
      </div>
        </>
    );
};

export default DeliveryCarousel;