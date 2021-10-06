import React from "react";

//components
import FloatMenuButton from "../../Components/restaurant/Order-Online/FloatMenuButton";

const OrderOnline=()=>{
    return(
        <>
        <div className="w-full">
           <aside className="hidden md:block w-2/6"></aside>
           <div className="w-full md:w-4/6"></div>
        </div>
        <FloatMenuButton/>
    </>
   );
};

export default OrderOnline;