import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import UserB from "./assets/User - Bjork.svg"
import UserV from "./assets/User - Viktor.svg"
import UserM from "./assets/User - Michal.svg"
import UserS from "./assets/User - Svanlaug.svg"


const MyFriends = () => {
  return (
    <div>
      <div className="mt-7 ml-7">
        <FaArrowLeft />
      </div>
      <div>
      <div>
        <IoIosSearch />
        <div className="bg-green w-[230px] h-[40px] rounded-2xl justify-end flex">
          Looking for someone special?
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <h1>My Friends</h1>
      </div>
      <div>
      <div className="w-[37px] h-[37px] justify-between">
        <img src={UserB} />
        <img src={UserV} />
        <img src={UserS}/>
        <img src={UserM}/>
        </div>
  
      </div>
</div>
</div>
  );
};

export default MyFriends;
