import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import UserB from "./assets/User - Bjork.svg"
import UserV from "./assets/User - Viktor.svg"
import UserM from "./assets/User - Michal.svg"
import UserS from "./assets/User - Svanlaug.svg"
import Obama from "./assets/obama.jpeg"
import andrea from "./assets/andrea.jpeg"
import anna from "./assets/anna.jpeg"
import brian from "./assets/brian.jpeg"





const MyFriends = () => {
    const imageUrls = [UserB, UserM, UserS, UserV,];
    const imageG = [Obama, anna, andrea, brian];

  return (
    <div>
      <div className="mt-7 ml-7">
        <FaArrowLeft size={24}/>
      </div>
      <div>
      <div className="flex items-center justify-center mt-7">
      <IoIosSearch size={24}/>
      <input
        type="text"
        placeholder="Looking for someone special?"
        className="bg-green w-[230px] h-[40px] rounded-2xl ml-2 p-2 outline-none"
      />
    </div>
      <div className="flex justify-center mt-12 mb-5">
        <h1>My Friends</h1>
      </div>
      <div>
      <div className="flex">
      {imageUrls.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
          className="w-1/4 p-2 rounded-full"
        />
      ))}
    </div>
    <div className="flex justify-center mt-12 mb-5">
        <h1>Suggested Friends</h1>
    </div>
    <div className="flex">
      {imageG.map((imageG, index) => (
        <img
          key={index}
          src={imageG}
          alt={`Image ${index + 1}`}
          className="w-1/4 p-2 rounded-full"
        />
      ))}
    </div>
 
      </div>
</div>
</div>
  );
};

export default MyFriends;
