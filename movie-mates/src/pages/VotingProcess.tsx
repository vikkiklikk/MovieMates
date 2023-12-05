import React from "react";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import SmallButton from "../components/ui/SmallButton";
import DropDownTime from "../components/DropDownTime";
import DropDown from "../components/ui/DropDown";

const VotingProcess = () => {
const buttons = [
      {title: "Submit"},
     ]


  return (
    <div>
      <div className="pl-7 pt-7"><FaArrowLeft /></div>

      <div className="justify-center flex items-center">
      <label htmlFor="text" className="mb-1">email</label>
        <DropDown />
        </div>
      {/* Add any other content or components here */}
      <DropDownTime/>
      <div className="justify-center pt-10 flex "> <SmallButton title="Submit"/></div>
    </div>
  );
};

export default VotingProcess;
