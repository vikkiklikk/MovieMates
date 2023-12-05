import Footer from "../components/Footer";
import { FaRegUser } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { IoTicketOutline, IoStatsChartOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import SmallButton from "../components/ui/SmallButton";
import DropDown from "../components/ui/DropDown";


const VotingProcess = () => {
    return (
      <div>
        <div className="pt-7 pl-7"> <FaArrowLeft/> </div>
        <div className="text-center font-bold"><p>suggest a vote</p></div>

        <div>
          <DropDown/>
          
        </div>
        {/* Add the footer here */}
        <div className="justify-center flex pt-10"> <SmallButton title="Submit" /></div>
        <Footer/>
      </div>
    );
  };
  
  export default VotingProcess;