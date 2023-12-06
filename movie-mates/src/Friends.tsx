import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


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
</div>
</div>
  );
};

export default MyFriends;
