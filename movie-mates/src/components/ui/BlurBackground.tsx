import React from "react";

const BlurBackground = () => {
  return (
    <div className="w-[390px] h-[844px]">
      <div className="absolute top-20 left-20 w-20 h-40 bg-[#86A5D9] bg-opacity-80 rounded-full filter blur-2xl"></div>
      <div className="absolute top-20 left-40 w-40 h-80 bg-[#C4EBC8] bg-opacity-70 rounded-full filter blur-xl rotate-45"></div>
      <div className="absolute top-[200px] left-10 w-60 h-60 bg-[#86A5D9] bg-opacity-40 rounded-full filter blur-2xl"></div>
    </div>
  );
};

export default BlurBackground;
