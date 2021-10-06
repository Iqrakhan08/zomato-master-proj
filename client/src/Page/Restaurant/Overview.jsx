import React from "react";
import { Link,useParams } from "react-router-dom";
import {IoMdArrowDropright} from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";



//componments
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../../Components/restaurant/MenuSimilarRestaurantCard";
import { NextArrow,PrevArrow } from "../../Components/CarouselArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/MapView";

const Overview=()=>{
    const {id} = useParams();
    const settings={
        dots:true,
        arrows:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        initialSlide:0,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        };

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
       
    return (
        <>
        <div className="flex flex-col md:flex-row relative">
            <div className="w-full md:w-8/12">
                <h2 className="fony-semibold text-lg md:text-xl my-4">About this place</h2>
           <div className="flex justify-between items-center">
               <h4 className="text-lg font-medium">Menu</h4>
               <Link to={`/restaurant/${id}/menu`}>
               <span className="flex items-center gap-1 text-zomato-400">
                   See all menu <IoMdArrowDropright/>
                   </span>
               </Link>
               </div>
               <div className="flex flex-wrap gap-3 my-4">
                 <MenuCollection 
                 menuTitle="Menu" pages="3" 
                 image="https://b.zmtcdn.com/data/menus/202/19726202/08637ed5d09467c8acbf9f3edd1cfcfc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
               </div>
               <h4 className="text-lg font-medium my-4">Cuisines</h4>
                   <div className="flex flex-wrap gap-2">
                       <span className="border text-cyan-400 px-2 py-1 rounded-full">
                           Street Food
                       </span>
                        <span className="border text-cyan-400 px-2 py-1 rounded-full">
                           Street Food
                       </span>
                       <span className="border text-cyan-400 px-2 py-1 rounded-full">
                           Street Food
                       </span>
                   </div>
                   <div className="my-4">
                   <h4 className="text-lg font-medium">Average Cost</h4>
                   <h6>₹100 for one (approx.)</h6>
                   <small className="text-gray-500">Exclusive of applicable taxes and charges,if any
                   </small>
            </div>
            <div className="my-4"> 
                <h4 className="text">Similar Restaurants</h4>
                <Slider {...settings}>
                <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/3/19655063/35cd5fe01cf3db40e6a6ae852e1ae605_featured_v2.jpg?output-format=webp"
                title="Dial A Biryani"
                /> 
                <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/3/19655063/35cd5fe01cf3db40e6a6ae852e1ae605_featured_v2.jpg?output-format=webp"
                title="Dial A Biryani"
                />
                <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/3/19655063/35cd5fe01cf3db40e6a6ae852e1ae605_featured_v2.jpg?output-format=webp"
                title="Dial A Biryani"
                />
                <MenuSimilarRestaurantCard
                image="https://b.zmtcdn.com/data/pictures/3/19655063/35cd5fe01cf3db40e6a6ae852e1ae605_featured_v2.jpg?output-format=webp"
                title="Dial A Biryani"
                />
                </Slider>
            </div>
           <div className="my-4">
               <h4 className="text-lg font-medium">
                   Rate your delivery experience
               </h4>
               <ReactStars
             count={5}
             onChange={ratingChanged}
             size={24}
             activeColor="#ffd700"
              />
           </div>
           <div className="my-4 w-full md:hidden flex flex-col gap-4"></div>
           <div className="my-4 flex flex-col gap-4">
          <ReviewCard/> 
          <ReviewCard/>
          <ReviewCard/>
           </div>
            </div>
            <aside 
            style={{height:"fit-content" }}
            className="hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-xl flex flex-col gap-4">
          <Mapview
          title="Ginkgo Pan Asian Kitchen"
          phno="+918591419470"    
          mapLocation="19.02335611354051, 72.84645042197391"
          address="Shop 1, Dharamputra, Pritam Estate, Dr. B.A. Road, Dadar East, Mumbai"
             />
            </aside>
        </div>
        </>
    );
};

export default Overview;